'use client';

import { useEffect, useState } from 'react';
import { getAllComments, getPendingComments, approveComment, deleteComment, CommentData } from '../../actions/comments';

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [pendingComments, setPendingComments] = useState<CommentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'pending'>('pending');

  useEffect(() => {
    loadComments();
  }, []);

  async function loadComments() {
    setIsLoading(true);
    try {
      const [allComments, pending] = await Promise.all([
        getAllComments(),
        getPendingComments()
      ]);
      setComments(allComments);
      setPendingComments(pending);
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleApprove(commentId: number) {
    try {
      await approveComment(commentId);
      await loadComments(); // Refresh the lists
    } catch (error) {
      console.error('Failed to approve comment:', error);
    }
  }

  async function handleDelete(commentId: number) {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return;
    }
    
    try {
      await deleteComment(commentId);
      await loadComments(); // Refresh the lists
    } catch (error) {
      console.error('Failed to delete comment:', error);
    }
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  }

  function renderComment(comment: CommentData) {
    return (
      <div key={comment.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-medium text-gray-900">{comment.authorName}</h3>
            <p className="text-sm text-gray-500">{comment.authorEmail}</p>
            <p className="text-xs text-gray-400">{formatDate(comment.createdAt)}</p>
          </div>
          <div className="flex items-center gap-2">
            {!comment.isApproved && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Pending
              </span>
            )}
            {comment.isApproved && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Approved
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            {comment.blogSlug ? `Blog: ${comment.blogSlug}` : `News ID: ${comment.newsId}`}
            {comment.parentId && ` (Reply to comment #${comment.parentId})`}
          </p>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-800 whitespace-pre-wrap">{comment.content}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {!comment.isApproved && (
            <button
              onClick={() => handleApprove(comment.id)}
              className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            >
              Approve
            </button>
          )}
          <button
            onClick={() => handleDelete(comment.id)}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Loading comments...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Comment Administration</h1>
          <p className="text-gray-600">Manage and moderate user comments</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending ({pendingComments.length})
              </button>
              <button
                onClick={() => setActiveTab('all')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'all'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                All Comments ({comments.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {activeTab === 'pending' && (
            <>
              {pendingComments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No pending comments</p>
                </div>
              ) : (
                pendingComments.map(renderComment)
              )}
            </>
          )}
          
          {activeTab === 'all' && (
            <>
              {comments.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No comments found</p>
                </div>
              ) : (
                comments.map(renderComment)
              )}
            </>
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={loadComments}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
