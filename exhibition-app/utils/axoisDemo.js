import axios from "axios"

import { getUserToken, logOut } from "./globalFunctions"

// const { publicRuntimeConfig } = getConfig()

const getBaseUrl = () => {
  switch (process.env.PROJECT_ENV) {
    case "production":
      return "https://api.myvisualresume.com/"
    case "staging":
      return "https://api.myvisualresume.com/"
    default:
      return "http://192.168.0.173:1338"
  }
}

const getStaticPageURL = () => {
  switch (process.env.PROJECT_ENV) {
    case "production":
      return "http://18.135.238.61:8080/"
    default:
      return "http://18.135.238.61:8080/"

    // case "production":
    //   return "https://api.xfans.biz/"
    // default:
    //   return "https://api.xfans.biz/"
  }
}

export const axiosApi = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer token`,
  },
})

export const axiosStaticPageApi = axios.create({
  baseURL: getStaticPageURL(),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer token`,
  },
})

const buildUrl = (baseUrl, params) => {
  if (!params) {
    return baseUrl
  }
  const queryString = Object.keys(params)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join("&")
  return `${baseUrl}?${queryString}`
}

export const axiosPost = async (
  url,
  data,
  token = null,
  uId = null,
  contentType = "application/json"
) => {
  let response = {}
  let localToken = getUserToken()
  // if (uId) {
  //   url = `${url}/${uId}`
  // }
  try {
    const result = await axiosApi.post(url, data, {
      headers: {
        Authorization: `Bearer ${token || (localToken ? localToken : null)}`,
        userid: uId,
        "Content-Type": contentType,
      },
    })
    // response.status = result.status;
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response?.status == 401) {
        response.status = false
        response.message = "Unauthorized"
        logOut()
      } else if (e.response.status == 403) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response.status == 500) {
        response.status = false
        response.message = "Internal server error"
      } else {
        response.status = false
        response.message = "something went wrong"
      }
    }
  }
  return response
}

export const axiosPut = async (
  url,
  data,
  token = null,
  uId = null,
  contentType = "application/json"
) => {
  let response = {}
  let localToken = getUserToken()
  try {
    const result = await axiosApi.put(url, data, {
      headers: {
        Authorization: `Bearer ${token || (localToken ? localToken : null)}`,
        userid: uId,
        "Content-Type": contentType,
      },
    })
    // response.status = result.status;
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response?.status == 401) {
        response.status = false
        response.message = "Unauthorized"
        logOut()
      } else if (e.response.status == 403) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response.status == 500) {
        response.status = false
        response.message = "Internal server error"
      } else {
        response.status = false
        response.message = "something went wrong"
      }
    }
  }
  return response
}

export const axiosGet = async (
  url,
  params = null,
  token = null,
  uId = null
) => {
  let response = {}
  let getUrl = await buildUrl(url, params)
  let localToken = getUserToken()
  try {
    const result = await axiosApi.get(getUrl, {
      headers: {
        Authorization: `Bearer ${token || (localToken ? localToken : null)}`,
        userid: uId,
      },
    })
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response?.status == 400) {
      response.status = false
      response.message = e.response.data.message
    } else if (e.response?.status == 401) {
      response.status = false
      response.message = "Unauthorized"
      logOut()
    } else if (e.response?.status == 500) {
      response.status = false
      response.message = "Internal server error"
    } else {
      response.status = false
      response.message = "something went wrong"
    }
  }
  return response
}

export const axiosGetStaticPage = async (url, params = null, token = null) => {
  let response = {}
  let getUrl = await buildUrl(url, params)
  let localToken = getUserToken()
  try {
    const result = await axiosStaticPageApi.get(getUrl, {
      headers: {
        Authorization: token || (localToken ? localToken : null),
      },
    })
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response?.status == 400) {
      response.status = false
      response.message = e.response.data.message
    } else if (e.response?.status == 500) {
      response.status = false
      response.message = "Internal server error"
    } else {
      response.status = false
      response.message = "something went wrong"
    }
  }
  return response
}

export const axiosDelete = async (
  url,
  data = {},
  token = null,
  uId = null
  // contentType = "application/json"
) => {
  let response = {}
  let localToken = getUserToken()
  try {
    const result = await axiosApi.delete(url, {
      headers: {
        Authorization: `Bearer ${token || (localToken ? localToken : null)}`,
        userid: uId,
      },
      data: data ? data : {},
    })
    // const result = await axiosApi.delete(url, data, {
    //   headers: {
    //     Authorization: token || (localToken ? localToken : null),
    //     "Content-Type": contentType,
    //   },
    // })
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response?.status == 400) {
      response.status = false
      response.message = e.response.data.message
    } else if (e.response?.status == 401) {
      response.status = false
      response.message = "Unauthorized"
      logOut()
    } else if (e.response?.status == 500) {
      response.status = false
      response.message = "Internal server error"
    } else {
      response.status = false
      response.message = "something went wrong"
    }
  }
  return response
}

export const axiosUpload = async (
  url,
  options,
  files = null,
  method = "post",
  token = null,
  contentType = "application/json"
) => {
  let response = {}
  let localToken = getUserToken()

  // const req = new XMLHttpRequest()

  // req.upload.addEventListener("progress", (event) => {
  //   if (event.lengthComputable) {
  //     options?.onProgress({
  //       percentage: (event.loaded / event.total) * 100,
  //     })
  //   }
  // })

  // req.addEventListener("load", () => {
  //   const success = req.status >= 200 && req.status < 300
  //   const { response } = req
  //   if (!success) {
  //     return reject(response)
  //   }
  //   return resolve(response)
  // })

  // req.upload.addEventListener("error", () => {
  //   reject(req.response)
  // })

  const formData = new FormData()
  files?.forEach((f) => formData.append(f.fieldname, f.file, f.file.name))
  options.customData &&
    Object.keys(options.customData).forEach((fieldname) => {
      if (
        typeof options.customData[fieldname] !== "undefined" &&
        !Array.isArray(options.customData[fieldname])
      )
        formData.append(fieldname, options.customData[fieldname])
      if (
        typeof options.customData[fieldname] !== "undefined" &&
        Array.isArray(options.customData[fieldname])
      ) {
        for (let i = 0; i < options.customData[fieldname].length; i += 1) {
          formData.append(fieldname, options.customData[fieldname][i])
        }
      }
    })

  try {
    let result
    if (method === "put") {
      result = await axiosApi.put(url, formData, {
        headers: {
          Authorization: token || (localToken ? localToken : null),
          "Content-Type": contentType,
        },
      })
    } else {
      result = await axiosApi.post(url, formData, {
        headers: {
          Authorization: token || (localToken ? localToken : null),
          "Content-Type": contentType,
        },
      })
    }
    response.status = true
    response.data = result.data
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response.status == 422) {
        response.status = false
        response.message = e.response.data.message
      } else if (e.response.status == 500) {
        response.status = false
        response.message = "Internal server error"
      } else {
        response.status = false
        response.message = "something went wrong"
      }
    }
  }
  return response
}
