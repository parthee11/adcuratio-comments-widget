/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const initialState = {
  comments: { id: "start", replies: [] },
};

export const CommentsContext = createContext(initialState);

export const CommentsProvider = ({ children }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("comments")) {
      let localComments = sessionStorage.getItem("comments");
      setComments(JSON.parse(localComments));
    } else {
      setComments(initialState.comments);
    }
  }, []);

  const persistComments = (updatedComments) => {
    sessionStorage.setItem("comments", JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const value = { comments, persistComments };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
};
