import AWS from "aws-sdk"

import { S3KEYS } from "./constant"

const uploadImageToS3 = (file, folderPath) =>
  new Promise((resolve) => {
    // console.log(file)
    const fileName = `${folderPath}/${new Date()
      .getTime()
      .toString()}_${encodeURIComponent(file.name)}`
    // console.log(
    //   `ak: ${S3KEYS.accessKeyId} sk: ${S3KEYS.secretAccessKey}
    // r: ${S3KEYS.region} b: ${S3KEYS.bucketName}`
    // )
    AWS.config.update({
      accessKeyId: S3KEYS.accessKeyId,
      secretAccessKey: S3KEYS.secretAccessKey,
    })

    const s3 = new AWS.S3({
      params: { Bucket: S3KEYS.bucketName },
      region: S3KEYS.region,
    })

    const params = {
      ACL: "public-read",
      // dirName: S3Buckets.userOriginal,
      Key: fileName,
      ContentType: file.type,
      Body: file,
    }
    // console.log(params)
    // const s3 = new AWS.S3()

    // const params = {
    //   Bucket: "cosfans-media",
    //   dirName: S3Buckets.userOriginal,
    //   Body: file,
    //   ContentType: "image",
    //   ACL: "public-read",
    //   region: "eu-west-2",
    // }

    s3.upload(params, (err, data) => {
      if (err) {
        // setIsLoading(false)
        // console.log("ERR :: ", err)
        resolve({ status: 401 })
      }
      if (data) {
        resolve({ status: 201, url: data.Location })
      } else {
        resolve({ status: 401 })
      }
    })
  })

export const uploadFilesWithProgress = (file, folderPath, progress, index) =>
  new Promise((resolve) => {
    const fileName = `${folderPath}/${new Date()
      .getTime()
      .toString()}_${encodeURIComponent(file.name)}`

    AWS.config.update({
      accessKeyId: S3KEYS.accessKeyId,
      secretAccessKey: S3KEYS.secretAccessKey,
    })

    const s3 = new AWS.S3({
      params: { Bucket: S3KEYS.bucketName },
      region: S3KEYS.region,
    })

    const params = {
      ACL: "public-read",
      // dirName: S3Buckets.userOriginal,
      Key: fileName,
      ContentType: file.type,
      Body: file,
    }

    s3.upload(params)
      .on("httpUploadProgress", function (evt) {
        // const uploaded = Math.round((evt.loaded / evt.total) * 100)
        // console.log(`File uploaded: ${uploaded}%`)
        // console.log(`File Progress : ${+(evt.loaded / 1000000).toFixed(2)} mb`)
        progress({
          progress: +(evt.loaded / 1000000).toFixed(2),
          // fileName: file.name,
          index: index,
        })
      })
      .send((err, data) => {
        if (err) {
          // setIsLoading(false)
          // console.log("ERR :: ", err)
          resolve({ status: 401 })
        }
        if (data) {
          resolve({ status: 201, url: data.Location })
        } else {
          resolve({ status: 401 })
        }
      })
  })

export default uploadImageToS3
