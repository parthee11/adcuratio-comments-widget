import { uid } from "uid";

export const addComments = (list, commentId, comment) => {
  if (list.id === commentId) {
    list.replies.push({
      id: uid(),
      text: comment,
      replies: [],
    });
    return list;
  }

  const latestComment = list.replies.map((listItem) => {
    return addComments(listItem, commentId, comment);
  });

  return { ...list, replies: latestComment };
};

export const editComments = (list, commentId, comment) => {
  if (list.id === commentId) {
    list.text = comment;
    return list;
  }

  list.replies.map((reply) => {
    return editComments(reply, commentId, comment);
  });

  return { ...list };
};

export const deleteComments = (list, commentId) => {
  for (let i = 0; i < list.replies.length; i++) {
    const currentComment = list.replies[i];
    if (currentComment.id === commentId) {
      list.replies.splice(i, 1);
      return list;
    } else {
      deleteComments(currentComment, commentId);
    }
  }
  return list;
};
