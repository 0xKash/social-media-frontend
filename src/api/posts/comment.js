import { apiErrorHandler } from "@/lib/handlers/error/error";

const API_URL = process.env.API_URL;

export const createComment = async (content, postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/comments`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    if (!response.ok) {
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteComment = async (commentId, postId) => {
  try {
    const response = await fetch(
      `${API_URL}/posts/${postId}/comments/${commentId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    if (!response.ok) {
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};
