const API_URL = process.env.API_URL;

export const getPosts = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const createPost = async (content) => {
  try {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
      }),
    });

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
