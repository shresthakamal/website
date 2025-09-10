'use client';

import { useState } from 'react';
import { CommentData, getBlogComments, getNewsComments, getBlogCommentCount, getNewsCommentCount } from '../../actions/comments';
import Comment from './Comment';
import CommentForm from './CommentForm';

interface CommentSectionProps {
  blogSlug?: string;
  newsId?: number;
  initialComments?: CommentData[];
  initialCount?: number;
}

export default function CommentSection({ 
  blogSlug, 
  newsId, 
  initialComments = [], 
  initialCount = 0 
}: CommentSectionProps) {
  const [comments, setComments] = useState<CommentData[]>(initialComments);
  const [commentCount, setCommentCount] = useState(initialCount);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // No optimistic updates needed since comments are approved by default

  async function refreshComments() {
    setIsLoading(true);
    setError('');
    
    try {
      let newComments: CommentData[] = [];
      let newCount = 0;
      
      if (blogSlug) {
        [newComments, newCount] = await Promise.all([
          getBlogComments(blogSlug),
          getBlogCommentCount(blogSlug)
        ]);
      } else if (newsId) {
        [newComments, newCount] = await Promise.all([
          getNewsComments(newsId),
          getNewsCommentCount(newsId)
        ]);
      }
      
      setComments(newComments);
      setCommentCount(newCount);
    } catch (err) {
      setError('Failed to load comments');
      console.error('Error loading comments:', err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleCommentSuccess(newComment: CommentData) {
    // Simply update the actual state and count - no optimistic updates needed
    setComments(prev => [newComment, ...prev]);
    setCommentCount(prev => prev + 1);
  }

  return (
    <section className="mt-12 border-t border-border pt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Comments
          {commentCount > 0 && (
            <span className="ml-2 text-lg text-muted-foreground">
              ({commentCount})
            </span>
          )}
        </h2>
        <p className="text-muted-foreground">
          Share your thoughts and join the discussion
        </p>
      </div>

      {/* Comment Form */}
      <div className="mb-8 p-6 bg-secondary/10 rounded-lg border border-border">
        <h3 className="text-lg font-medium text-foreground mb-4">Leave a Comment</h3>
        <CommentForm
          blogSlug={blogSlug}
          newsId={newsId}
          onSuccess={handleCommentSuccess}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
          {error}
          <button
            onClick={refreshComments}
            className="ml-2 underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading comments...
          </div>
        </div>
      )}

      {/* Comments List */}
      {!isLoading && (
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-muted-foreground">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-lg">No comments yet</p>
                <p className="text-sm">Be the first to share your thoughts!</p>
              </div>
            </div>
          ) : (
            comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                blogSlug={blogSlug}
                newsId={newsId}
                onReplySuccess={refreshComments}
              />
            ))
          )}
        </div>
      )}

      {/* Refresh Button */}
      {!isLoading && comments.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={refreshComments}
            className="inline-flex items-center px-4 py-2 text-sm text-muted-foreground border border-border rounded-md hover:bg-accent hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Comments
          </button>
        </div>
      )}
    </section>
  );
}
