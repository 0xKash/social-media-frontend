export const registerErrorHandler = (error) => {
  if (error.prismaCode === "P2002")
    return {
      error: "username",
      data: "Username already exists",
    };
  if (error.code === "BAD_REQUEST")
    return {
      error: "password",
      data: "Passwords don't match",
    };
};

export const loginErrorHandler = (error) => {
  if (error.status === "error")
    return "The username or password you entered is incorrect";
};

export const apiErrorHandler = (error) => {
  if (error.statusCode === 401) throw error;
};
