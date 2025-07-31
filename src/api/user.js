import { apiErrorHandler } from "@/lib/errorHandlers";

const API_URL = process.env.API_URL;

export const followUser = async (targetId) => {
  try {
    const response = await fetch(`${API_URL}/users/${targetId}/follow`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const unfollowUser = async (targetId) => {
  try {
    const response = await fetch(`${API_URL}/users/${targetId}/unfollow`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/users?limit=${limit}`, {
      credentials: "include",
    });

    if (!response.ok) {
      console.log(response);
      apiErrorHandler(await response.json());
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};
