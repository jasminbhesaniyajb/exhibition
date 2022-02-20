import jwt from "jsonwebtoken"

import { secureKeys } from "./constant"

// eslint-disable-next-line implicit-arrow-linebreak
const getUserToken = () => null

const logOut = () => {
  localStorage.removeItem("persist:exhibition")
  localStorage.removeItem("token")
  localStorage.removeItem("Time")
  window.location.href = `${window.location.origin}/login`
}

const encodeData = async (payload) =>
  jwt.sign(payload, secureKeys.jwtTokenSecret)

const decodeData = async (token) => {
  if (!token) {
    return null
  }
  const decode = jwt.verify(token, secureKeys.jwtTokenSecret)
  return decode
}
const getUser = async (token) => {
  if (!token) {
    return null
  }
  const decode = jwt.verify(token, secureKeys.jwtTokenSecret)
  const user = decode?.data?.data
  return user
}

export const getVisualFileDetailsObj = (fileUploadedUrl) => {
  const defaultVisualFileObj = {
    extension: "",
    name: "",
    url: "",
  }

  if (fileUploadedUrl) {
    const extFileExtension =
      fileUploadedUrl
        ?.split("userprofile/")
        ?.pop()
        ?.split("_")
        ?.pop()
        ?.split(".")
        ?.pop() || ""

    const fileName =
      fileUploadedUrl
        ?.split("userprofile/")
        ?.pop()
        ?.split("_")
        ?.pop()
        ?.split(".")[0] || ""
    return {
      extension: extFileExtension,
      name: decodeURI(fileName).replaceAll("%20", " "),
      url: fileUploadedUrl || "",
    }
  }
  return defaultVisualFileObj
}
export { getUserToken, encodeData, getUser, decodeData, logOut }
