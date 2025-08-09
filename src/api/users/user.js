import { apiErrorHandler } from "@/lib/handlers/error/error";

const API_URL = process.env.API_URL;

export const getUsers = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/users?limit=${limit}`, {
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

export const getUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
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
