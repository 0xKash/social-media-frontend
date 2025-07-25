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
