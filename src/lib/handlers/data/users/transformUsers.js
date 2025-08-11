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
  return {
    id: apiUser.id,
    username: apiUser.username,
    avatar: apiUser.avatar,
    description: apiUser.description,
    followBool: apiUser.followedBy.some((follow) => follow.id === userId),
    badgeBool: apiUser.github_id ? true : false,
    followingCount: apiUser._count.following,
    followedByCount: apiUser._count.followedBy,
  };
};

// Auth
export const transformAuth = (authUser) => {
  return {
    id: authUser.id,
    username: authUser.username,
    description: authUser.description,
    avatar: authUser.avatar ? authUser.avatar : authUser.photos[0].value,
    followBool: false,
    badgeBool: authUser.nodeId ? true : false,
  };
};
