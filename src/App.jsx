import { useState } from "react";
import Comments from "./components/comments/Comments";
import {
  addComments,
  deleteComments,
  editComments,
} from "./utils/comments-utils";

function App() {
  const [comments, setComments] = useState({ id: "start", replies: [] });

  const handleAddComments = (commentId, comment) => {
    const updatedComments = addComments(comments, commentId, comment);
    setComments(updatedComments);
  };

  const handleEditComments = (commentId, comment) => {
    const updatedComments = editComments(comments, commentId, comment);
    setComments(updatedComments);
  };

  const handleDeleteComments = (commentId) => {
    const updatedComments = deleteComments(comments, commentId);
    setComments({ ...updatedComments });
  };

  return (
    <div>
      <Comments
        comments={comments}
        handleAddComments={handleAddComments}
        handleEditComments={handleEditComments}
        handleDeleteComments={handleDeleteComments}
      />
    </div>
  );
}

export default App;
