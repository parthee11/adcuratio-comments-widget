/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";
import { styled } from "styled-components";

const RepliesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  border-bottom: 1px dashed #ccc;
  width: 500px;
  margin-bottom: 1rem;
  span {
    display: inline-block;
    width: 250px;
    white-space: text-wrap;
    &.time {
      font-size: 12px;
      opacity: 0.4;
    }
  }
  button {
    height: 40px;
  }
`;

const errMessageHandler = (setter, errMsg) => {
  setter(errMsg);
  setTimeout(() => {
    setter(null);
  }, 2000);
};

const Comments = ({
  comments,
  handleAddComments,
  handleEditComments,
  handleDeleteComments,
}) => {
  const [commentText, setCommentText] = useState("");
  const [commentErr, setCommentErr] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(comments.text || "");
  const [editErr, setEditErr] = useState(null);

  const [replyMode, setReplyMode] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyErr, setReplyErr] = useState("");

  const onCommentAdd = () => {
    if (editMode) {
      if (editText !== "") {
        handleEditComments(comments.id, editText);
        setEditMode(false);
      } else {
        errMessageHandler(setEditErr, "Invalid reply");
      }
    } else if (replyMode) {
      if (replyText !== "") {
        handleAddComments(comments.id, replyText);
        setReplyMode(false);
        setReplyText("");
      } else {
        errMessageHandler(setReplyErr, "Invalid reply");
      }
    } else {
      if (commentText !== "") {
        handleAddComments(comments.id, commentText);
        setCommentText("");
      } else {
        errMessageHandler(setCommentErr, "Invalid comment");
      }
    }
  };

  const onEditComment = () => {
    setEditMode(true);
  };

  const onDeleteComment = () => {
    handleDeleteComments(comments.id);
  };

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div>
        {comments.id === "start" ? (
          <div style={{ marginBottom: "1.5rem" }}>
            <InputForm
              value={commentText}
              onChangeHandler={(e) => setCommentText(e.target.value)}
              placeholder="Enter a comment..."
              error={commentErr}
              className="input-large"
            >
              <Button
                className="btn-large"
                text="Comment"
                handler={onCommentAdd}
              />
            </InputForm>
          </div>
        ) : editMode ? (
          <InputForm
            value={editText}
            onChangeHandler={(e) => setEditText(e.target.value)}
            placeholder="Enter a reply..."
            error={editErr}
          >
            <Button text="Save" handler={onCommentAdd} />
            <Button
              text="Cancel"
              handler={() => {
                setEditMode(false);
                setEditText(comments.text || "");
              }}
            />
          </InputForm>
        ) : (
          <RepliesContainer>
            <span>
              <span>{comments.text}</span>
              <span className="time">Created on: {comments.createdOn}</span>
            </span>
            <div>
              <Button text="Reply" handler={() => setReplyMode(true)} />
              <Button text="Edit" handler={onEditComment} />
              <Button
                text="Delete"
                className="btn-delete"
                handler={onDeleteComment}
              />
            </div>
          </RepliesContainer>
        )}
      </div>

      {replyMode && (
        <InputForm
          value={replyText}
          onChangeHandler={(e) => setReplyText(e.target.value)}
          placeholder="Enter a reply..."
          error={replyErr}
        >
          <Button text="Reply" handler={onCommentAdd} />
          <Button
            text="Cancel"
            handler={() => {
              setReplyMode(false);
              setReplyText("");
            }}
          />
        </InputForm>
      )}

      {comments?.replies.map((reply) => (
        <Comments
          key={reply.id}
          comments={reply}
          handleAddComments={handleAddComments}
          handleEditComments={handleEditComments}
          handleDeleteComments={handleDeleteComments}
        />
      ))}
    </div>
  );
};

export default Comments;
