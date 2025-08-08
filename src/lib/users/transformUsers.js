// Array of users
export const transformUsers = (apiUsers) => {
  return apiUsers.map((user) => ({
    id: user.id,
    username: user.username,
    avatar: user.avatar,
    followBool: false,
    badgeBool: user.github_id ? true : false,
  }));
};

// Single user
export const transformUser = (apiUser) => {
  return {
    id: apiUser.id,
    username: apiUser.username,
    avatar: apiUser.avatar ? apiUser.avatar : apiUser.photos[0].value,
    followBool: false,
    badgeBool: apiUser.nodeId ? true : false,
  };
};
