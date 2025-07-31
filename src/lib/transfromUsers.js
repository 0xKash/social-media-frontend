export const transformUsers = (apiUsers) => {
  return apiUsers.map((user) => ({
    username: user.username,
    avatar: user.avatar,
    followBool: false,
    badgeBool: user.github_id ? true : false,
  }));
};

export const transformUser = (apiUser) => {
  return {
    username: apiUser.username,
    avatar: apiUser.avatar,
    followBool: false,
    badgeBool: apiUser.github_id ? true : false,
  };
};
