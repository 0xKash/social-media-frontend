import { apiErrorHandler } from "@/lib/handlers/error";

const API_URL = process.env.API_URL;

export const likePost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/likes`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const dislikePost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}/likes`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};
