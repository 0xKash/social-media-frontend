import { apiErrorHandler } from "@/lib/handlers/error/error";

const API_URL = process.env.API_URL;

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
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

export const getPost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
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

export const createPost = async (content) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
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
