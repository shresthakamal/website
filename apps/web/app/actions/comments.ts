'use server';

import prisma from '@repo/db/client';
import { revalidatePath } from 'next/cache';

// Types for Comment data
export interface CommentData {
  id: number;
  content: string;
  authorName: string;
  authorEmail: string | null;
  blogSlug: string | null;
  newsId: number | null;
  isApproved: boolean;
  isDeleted: boolean;
  parentId: number | null;
  createdAt: Date;
  updatedAt: Date;
  replies?: CommentData[];
}

export interface CreateCommentData {
  content: string;
  authorName: string;
  authorEmail?: string;
  blogSlug?: string;
  newsId?: number;
  parentId?: number;
}

// Helper function to transform Prisma comment to CommentData
function transformComment(comment: {
  id: number;
  content: string;
  authorName: string;
  authorEmail: string | null;
  blogSlug: string | null;
  newsId: number | null;
  isApproved: boolean;
  isDeleted: boolean;
  parentId: number | null;
  createdAt: Date;
  updatedAt: Date;
  replies?: unknown[];
}): CommentData {
  return {
    id: comment.id,
    content: comment.content,
    authorName: comment.authorName,
    authorEmail: comment.authorEmail,
    blogSlug: comment.blogSlug,
    newsId: comment.newsId,
    isApproved: comment.isApproved,
    isDeleted: comment.isDeleted,
    parentId: comment.parentId,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
    replies: comment.replies ? (comment.replies as typeof comment[]).map(transformComment) : undefined,
  };
}

/**
 * Create a new comment
 */
export async function createComment(data: CreateCommentData): Promise<CommentData> {
  try {
    // Validate that either blogSlug or newsId is provided, but not both
    if (!data.blogSlug && !data.newsId) {
      throw new Error('Either blogSlug or newsId must be provided');
    }
    if (data.blogSlug && data.newsId) {
      throw new Error('Cannot provide both blogSlug and newsId');
    }

    // Basic validation
    if (!data.content.trim()) {
      throw new Error('Comment content cannot be empty');
    }
    if (!data.authorName.trim()) {
      throw new Error('Author name cannot be empty');
    }
    // Email validation only if email is provided
    if (data.authorEmail && data.authorEmail.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.authorEmail.trim())) {
        throw new Error('Invalid email address');
      }
    }

    // If replying to a comment, verify parent exists
    if (data.parentId) {
      const parentComment = await prisma.comment.findUnique({
        where: { id: data.parentId }
      });
      if (!parentComment) {
        throw new Error('Parent comment not found');
      }
      // Ensure parent comment is for the same blog/news
      if (data.blogSlug && parentComment.blogSlug !== data.blogSlug) {
        throw new Error('Parent comment does not belong to the same blog');
      }
      if (data.newsId && parentComment.newsId !== data.newsId) {
        throw new Error('Parent comment does not belong to the same news article');
      }
    }

    const comment = await prisma.comment.create({
      data: {
        content: data.content.trim(),
        authorName: data.authorName.trim(),
        authorEmail: data.authorEmail && data.authorEmail.trim() ? data.authorEmail.trim().toLowerCase() : null,
        blogSlug: data.blogSlug || null,
        newsId: data.newsId || null,
        parentId: data.parentId || null,
        // isApproved will use the database default (true)
      },
    });

    // Note: No revalidatePath here to prevent page refreshes
    // Client-side optimistic updates will handle UI updates

    return transformComment(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to create comment');
  }
}

/**
 * Get comments for a blog post (approved comments only)
 */
export async function getBlogComments(blogSlug: string): Promise<CommentData[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        blogSlug,
        isApproved: true,
        isDeleted: false,
        parentId: null, // Only top-level comments
      },
      include: {
        replies: {
          where: {
            isApproved: true,
            isDeleted: false,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return comments.map(transformComment);
  } catch (error) {
    console.error('Error fetching blog comments:', error);
    throw new Error('Failed to fetch comments');
  }
}

/**
 * Get comments for a news article (approved comments only)
 */
export async function getNewsComments(newsId: number): Promise<CommentData[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        newsId,
        isApproved: true,
        isDeleted: false,
        parentId: null, // Only top-level comments
      },
      include: {
        replies: {
          where: {
            isApproved: true,
            isDeleted: false,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return comments.map(transformComment);
  } catch (error) {
    console.error('Error fetching news comments:', error);
    throw new Error('Failed to fetch comments');
  }
}

/**
 * Get comment count for a blog post
 */
export async function getBlogCommentCount(blogSlug: string): Promise<number> {
  try {
    return await prisma.comment.count({
      where: {
        blogSlug,
        isApproved: true,
        isDeleted: false,
      },
    });
  } catch (error) {
    console.error('Error counting blog comments:', error);
    return 0;
  }
}

/**
 * Get comment count for a news article
 */
export async function getNewsCommentCount(newsId: number): Promise<number> {
  try {
    return await prisma.comment.count({
      where: {
        newsId,
        isApproved: true,
        isDeleted: false,
      },
    });
  } catch (error) {
    console.error('Error counting news comments:', error);
    return 0;
  }
}

/**
 * Admin functions for comment moderation
 */

/**
 * Get all comments (for admin moderation)
 */
export async function getAllComments(includeDeleted = false): Promise<CommentData[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: includeDeleted ? {} : { isDeleted: false },
      include: {
        replies: {
          where: includeDeleted ? {} : { isDeleted: false },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return comments.map(transformComment);
  } catch (error) {
    console.error('Error fetching all comments:', error);
    throw new Error('Failed to fetch comments');
  }
}

/**
 * Get pending comments (for admin approval)
 */
export async function getPendingComments(): Promise<CommentData[]> {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        isApproved: false,
        isDeleted: false,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return comments.map(transformComment);
  } catch (error) {
    console.error('Error fetching pending comments:', error);
    throw new Error('Failed to fetch pending comments');
  }
}

/**
 * Approve a comment
 */
export async function approveComment(commentId: number): Promise<CommentData> {
  try {
    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { isApproved: true },
    });

    // Revalidate the appropriate page
    if (comment.blogSlug) {
      revalidatePath(`/blogs/${comment.blogSlug}`);
    } else if (comment.newsId) {
      revalidatePath(`/news/*`);
    }

    return transformComment(comment);
  } catch (error) {
    console.error('Error approving comment:', error);
    throw new Error('Failed to approve comment');
  }
}

/**
 * Delete a comment (soft delete)
 */
export async function deleteComment(commentId: number): Promise<void> {
  try {
    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { isDeleted: true },
    });

    // Revalidate the appropriate page
    if (comment.blogSlug) {
      revalidatePath(`/blogs/${comment.blogSlug}`);
    } else if (comment.newsId) {
      revalidatePath(`/news/*`);
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw new Error('Failed to delete comment');
  }
}

/**
 * Update comment content (admin only)
 */
export async function updateComment(commentId: number, content: string): Promise<CommentData> {
  try {
    if (!content.trim()) {
      throw new Error('Comment content cannot be empty');
    }

    const comment = await prisma.comment.update({
      where: { id: commentId },
      data: { content: content.trim() },
    });

    // Revalidate the appropriate page
    if (comment.blogSlug) {
      revalidatePath(`/blogs/${comment.blogSlug}`);
    } else if (comment.newsId) {
      revalidatePath(`/news/*`);
    }

    return transformComment(comment);
  } catch (error) {
    console.error('Error updating comment:', error);
    throw new Error('Failed to update comment');
  }
}
