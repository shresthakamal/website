'use client';

import { useState } from 'react';
import { CommentData } from '../../actions/comments';
import CommentForm from './CommentForm';

interface CommentProps {
  comment: CommentData;
  blogSlug?: string;
  newsId?: number;
  onReplySuccess?: () => void;
}

export default function Comment({ comment, blogSlug, newsId, onReplySuccess }: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);

  function handleReplySuccess() {
    setShowReplyForm(false);
    onReplySuccess?.();
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  }

  return (
    <div className="space-y-4">
      {/* Main Comment */}
      <div className="bg-secondary/20 rounded-lg p-4 border border-border">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-medium text-sm">
                {comment.authorName.charAt(0).toUpperCase()}
              </span>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground">{comment.authorName}</h4>
              <time className="text-sm text-muted-foreground">
                {formatDate(comment.createdAt)}
              </time>
            </div>
          </div>
        </div>
        
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {comment.content}
          </p>
        </div>
        
        <div className="mt-3 flex items-center gap-4">
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Reply
          </button>
          
          {comment.replies && comment.replies.length > 0 && (
            <span className="text-sm text-muted-foreground">
              {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
            </span>
          )}
        </div>
      </div>

      {/* Reply Form */}
      {showReplyForm && (
        <div className="ml-6 pl-4 border-l-2 border-border">
          <div className="bg-background rounded-lg p-4 border border-border">
            <h5 className="text-sm font-medium text-foreground mb-3">
              Reply to {comment.authorName}
            </h5>
            <CommentForm
              blogSlug={blogSlug}
              newsId={newsId}
              parentId={comment.id}
              onSuccess={handleReplySuccess}
              onCancel={() => setShowReplyForm(false)}
              placeholder={`Reply to ${comment.authorName}...`}
              submitText="Post Reply"
            />
          </div>
        </div>
      )}

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-6 pl-4 border-l-2 border-border space-y-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="bg-background rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium text-xs">
                      {reply.authorName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-foreground text-sm">{reply.authorName}</h5>
                    <time className="text-xs text-muted-foreground">
                      {formatDate(reply.createdAt)}
                    </time>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none dark:prose-invert">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap text-sm">
                  {reply.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
