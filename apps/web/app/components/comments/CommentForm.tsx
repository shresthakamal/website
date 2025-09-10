'use client';

import { useState, useTransition } from 'react';
import { createComment, CreateCommentData, CommentData } from '../../actions/comments';

interface CommentFormProps {
  blogSlug?: string;
  newsId?: number;
  parentId?: number;
  onSuccess?: (comment: CommentData) => void;
  onCancel?: () => void;
  placeholder?: string;
  submitText?: string;
}

export default function CommentForm({
  blogSlug,
  newsId,
  parentId,
  onSuccess,
  onCancel,
  placeholder = "Share your thoughts...",
  submitText = "Post Comment"
}: CommentFormProps) {
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const commentData: CreateCommentData = {
      content,
      authorName,
      authorEmail: authorEmail.trim() || undefined,
      blogSlug,
      newsId,
      parentId,
    };

    startTransition(async () => {
      try {
        const newComment = await createComment(commentData);
        
        // Reset form
        setContent('');
        setAuthorName('');
        setAuthorEmail('');
        
        // Call success callback with the new comment
        onSuccess?.(newComment);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to post comment');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
          {error}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="authorName" className="block text-sm font-medium text-foreground mb-1">
            Name *
          </label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            disabled={isPending}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="authorEmail" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <input
            type="email"
            id="authorEmail"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            disabled={isPending}
            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
            placeholder="your@email.com (optional)"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Your email will not be published
          </p>
        </div>
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-foreground mb-1">
          Comment *
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={isPending}
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 resize-y min-h-[100px]"
          placeholder={placeholder}
        />
      </div>
      
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isPending || !content.trim() || !authorName.trim()}
          className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending && (
            <svg className="w-4 h-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
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
          )}
          {isPending ? 'Posting...' : submitText}
        </button>
        
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={isPending}
            className="inline-flex items-center px-4 py-2 border border-border text-foreground rounded-md font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
      
      <div className="text-xs text-muted-foreground">
        <p>Comments are moderated and will be published after approval.</p>
      </div>
    </form>
  );
}
