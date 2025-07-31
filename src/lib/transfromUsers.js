export const transformUsers = (apiUsers) => {
  return apiUsers.map((user) => ({
    username: user.username,
    avatar: user.avatar,
    followBool: false,
    badgeBool: user.github_id ? true : false,
  }));
};
