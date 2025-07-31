import { apiErrorHandler } from "@/lib/errorHandlers";
const API_URL = process.env.API_URL;

export const registerUser = async (username, password, confirmPassword) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        confirm_password: confirmPassword,
      }),
    });
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const githubLoginUser = async () => {
  window.location.href = `${API_URL}/auth/github`;
};

export const logoutUser = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/logout`, {
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

export const authUser = async () => {
  try {
    const response = await fetch(`${API_URL}/auth`, {
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
