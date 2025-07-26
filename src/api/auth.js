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
    console.error(err);
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
    console.error(err);
  }
};

export const githubLoginUser = async () => {
  window.location.href = `${API_URL}/auth/github`;
};
