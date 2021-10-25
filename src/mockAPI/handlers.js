import { rest } from 'msw';
import queryString from 'query-string';
import { mockUsersProfile } from '../mockData/mockUsersProfile';
const baseURL = process.env.REACT_APP_BACKEND_URL;

//get the folloing user list through the id list in current user
const getFollowingList = (currentUserId, userList) => {
  console.log(currentUserId, userList);
  const parsedCurrentUserId = parseInt(currentUserId);
  const currentUser = userList.find((user) => user.id === parsedCurrentUserId);
  if (!currentUser) {
    return [];
  }

  let followingList = [];
  currentUser.following.forEach((followingId) => {
    let user = userList.find((user) => user.id === followingId);
    if (user) {
      followingList.push(user);
    }
  });
  return followingList;
};

export const handlers = [
  rest.get(`${baseURL}/api/v1/users`, (req, res, ctx) => {
    const searparams = req.url.search;
    const params = queryString.parse(searparams);
    if (params.currentUserId) {
      const followingList = getFollowingList(
        params.currentUserId,
        mockUsersProfile
      );
      return res(ctx.json(followingList));
    }
    return res(ctx.json(mockUsersProfile));
  }),
];
