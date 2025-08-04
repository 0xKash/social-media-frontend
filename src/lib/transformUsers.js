export const transformUsers = (apiUsers) => {
  console.log(apiUsers);

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
    avatar: apiUser.avatar ? apiUser.avatar : apiUser.photos[0].value,
    followBool: false,
    badgeBool: apiUser.nodeId ? true : false,
  };
};
