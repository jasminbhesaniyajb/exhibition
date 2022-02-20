const prefixRouteV1 = (route) => `api/v1/${route}`

const editProfileByID = (userId) => prefixRouteV1(`user/editprofile/${userId}`)

const apiRouter = {
  // User api routes
  FORGOTPASS: prefixRouteV1("user/forgotpassword"), // forgot pass
  RESETPASS: prefixRouteV1("user/resetpassword"), // reset pass
  CREATEPOST: prefixRouteV1("user/post"), // create user post
  FETCHUSERPOSTS: prefixRouteV1("user/post"), // fetching user posts
  FETCHUSERPOSTS_VISITOR: prefixRouteV1("posts"), // fetching user posts visitor side
  FETCH_SINGLE_POST_VISITOR: prefixRouteV1("post"), // fetching user post visitor side
  DELETEUSERPOSTS: prefixRouteV1("user/post"), // delete user posts
  UPDATEUSERPOSTS: prefixRouteV1("user/post"), // update user post

  FETCHSLIDES: prefixRouteV1("user/slides"),
  UPDATESLIDESHOW: prefixRouteV1("user/create-slideshow"),
  HOMEPAGE_VISITOR: prefixRouteV1("homepagedetail"), // homepage detail for visitor side

  USERDETAIL_VISITOR: prefixRouteV1("userdetail"), // user detail for visitor side
  EDITPROFILE: editProfileByID,
}

export default apiRouter
