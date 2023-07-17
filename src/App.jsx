import { useContext } from "react";
import Comments from "./components/comments/Comments";
import {
  addComments,
  deleteComments,
  editComments,
} from "./utils/comments-utils";
import { CommentsContext } from "./context/CommentsContext";

function App() {
  const { comments, persistComments } = useContext(CommentsContext);

  const handleAddComments = (commentId, comment) => {
    const updatedComments = addComments(comments, commentId, comment);
    persistComments(updatedComments);
  };

  const handleEditComments = (commentId, comment) => {
    const updatedComments = editComments(comments, commentId, comment);
    persistComments(updatedComments);
  };

  const handleDeleteComments = (commentId) => {
    const updatedComments = deleteComments(comments, commentId);
    persistComments({ ...updatedComments });
  };

  return (
    <div>
      {comments && (
        <Comments
          comments={comments}
          handleAddComments={handleAddComments}
          handleEditComments={handleEditComments}
          handleDeleteComments={handleDeleteComments}
        />
      )}
    </div>
  );
}

export default App;
