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
export const transformUser = (apiUser, userId) => {
  console.log(apiUser, userId);

  return {
    id: apiUser.id,
    username: apiUser.username,
    avatar: apiUser.avatar ? apiUser.avatar : apiUser.photos[0].value,
    followBool: apiUser.followedBy.some((follow) => follow.id === userId),
    badgeBool: apiUser.nodeId ? true : false,
  };
};

// Auth
export const transformAuth = (authUser) => {
  return {
    id: authUser.id,
    username: authUser.username,
    avatar: authUser.avatar ? authUser.avatar : authUser.photos[0].value,
    followBool: false,
    badgeBool: authUser.nodeId ? true : false,
  };
};
