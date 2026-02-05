import { useState } from 'react';
import { Section } from '../../../common/Section';
import { Button } from '../../../common/Button';
import { ICONS } from '../../../../utils/icons';
import { INITIAL_COMMENTS, type Comment } from '../../../../utils/constants';

export const Comments = () => {
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState('');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handlePostComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        userName: 'Current User',
        userInitial: 'U',
        comment: newComment.trim(),
        date: new Date().toISOString().split('T')[0],
        avatar: undefined,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <Section>
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-primary-dark-blue">Comments</h2>
        
        {/* Existing Comments */}
        <div className="flex flex-col gap-4 max-h-[240px] overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-2 border border-gray-border rounded-[10px] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gray-border flex items-center justify-center shrink-0 overflow-hidden">
                    {comment.avatar && !imageErrors.has(comment.id) ? (
                      <img
                        src={comment.avatar}
                        alt={comment.userName}
                        className="w-full h-full object-cover"
                        onError={() => {
                          setImageErrors((prev) => new Set(prev).add(comment.id));
                        }}
                      />
                    ) : (
                      <span className="text-sm font-bold text-gray-text ">
                        {comment.userInitial}
                      </span>
                    )}
                  </div>
                  {/* Name */}
                  <span className="text-sm font-bold text-primary-dark-blue">
                    {comment.userName}
                  </span>
                </div>
                {/* Date */}
                <span className="text-xs text-gray-text">{comment.date}</span>
              </div>
              {/* Comment */}
              <p className="text-sm text-primary-dark-blue">{comment.comment}</p>
            </div>
          ))}
        </div>

        {/* New Comment Input */}
        <div className="flex flex-col gap-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full min-h-[100px] p-3 border border-gray-border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary-dark-blue focus:border-transparent"
          />
          <div className="flex justify-start">
            <Button
              label="Post Comment"
              icon={ICONS.sentIcon}
              iconPosition="left"
              onPress={handlePostComment}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
