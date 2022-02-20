export const seoDetail = {
  title: "",
  canonical: "",
  desc: "",
  image: "/images/YoYoBoat_Logo.png",
  keywords: "Yoyoboat, boat, rental",
  siteName: "",
  siteIcon: "",
}

export const boatYear = () => {
  let currentYear = new Date().getFullYear()
  let years = []
  let startYear = 1940
  for (let year = currentYear; year >= startYear; year--) {
    years.push({ value: year, label: year })
  }
  return years
}

export const pasengerOptions = () => {
  let passengerArr = []
  for (var digit = 1; digit <= 100; digit++) {
    passengerArr.push({ value: digit, label: digit })
  }
  return passengerArr
}
export const boatsPasengerOptions = (total) => {
  let passengerArr = []
  for (var digit = 1; digit <= total; digit++) {
    passengerArr.push({ value: digit, label: digit })
  }
  return passengerArr
}
export const operateBoatYear = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
]
export const monthArray = [
  { value: "1", label: "Jan" },
  { value: "2", label: "Feb" },
  { value: "3", label: "Mar" },
  { value: "4", label: "Apr" },
  { value: "5", label: "May" },
  { value: "6", label: "Jun" },
  { value: "7", label: "Jul" },
  { value: "8", label: "Aug" },
  { value: "9", label: "Sep" },
  { value: "10", label: "Oct" },
  { value: "11", label: "Nov" },
  { value: "12", label: "Dec" },
]

export const rulePriceOptions = [
  { value: "increase", label: "Price increase" },
  { value: "decrease", label: "Price decrease" },
]

export const ruleAmountTypeOptions = [
  { value: "percent", label: "% Percent" },
  { value: "fixed", label: "$ Fixed" },
]

export const searchRadiusOptions = [
  { value: 10, label: "10 miles" },
  { value: 25, label: "25 miles" },
  { value: 50, label: "50 miles" },
  { value: 100, label: "100 miles" },
  { value: 0, label: "Anywhere" },
]

export const boatStatus = {
  1: {
    key: "inprogress",
    className: "",
    value: "In progress",
    isProps: true,
    btnTxt: "Complete listing",
  },
  2: {
    key: "inprogress",
    className: "",
    value: "In progress",
    isProps: true,
    btnTxt: "Complete listing",
  },
  3: {
    key: "published",
    className: "published",
    value: "Published",
    isProps: false,
    btnTxt: "Edit listing",
  },
}

export const cardBrand = {
  Visa: { image: "/images/visa.svg" },
  MasterCard: { image: "/images/maestro.svg" },
  "American Express": { image: "/images/american-express.svg" },
  JCB: { image: "/images/JCB-logo-card.svg" },
  "Diners Club": { image: "/images/diners-club-seeklogo.svg" },
  Discover: { image: "/images/discover.svg" },
  UnionPay: { image: "/images/UnionPay-card.svg" },
  noImage: { image: "/images/svg/credit-card-icon.svg" },
}

export const passenger = Array.from(Array(100).keys())

export const priceRangeObj = { min: 0, max: 1000 }

export const secureKeys = {
  jwtTokenSecret: "].Yb2A3*V(.;?paiyx]Y:jd$8a/R7C",
}

export const S3KEYS = {
  accessKeyId: process.env.NEXT_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_AWS_SECRET_KEY,
  region: process.env.NEXT_AWS_REGION,
  bucketName: process.env.NEXT_AWS_BUCKET_NAME,
}

export const S3BucketsDir = {
  postMedia: `posts`,
  userProfileMedia: `userprofile`,
  slideMedia: `slides`,
  archiveMedia: "archive",
}

export const metaDetail = {
  landing: {
    title: "MVR - My Visual Resume",
    desc: "THE GLOBAL STANDARD FOR PRACTICAL AND CORPORATE PROFESSIONALS WORLDWIDE",
    canonical: "https://myvisualresume.com",
    keywords:
      "resume, my, visual, global, standard, my visual resume, visual resume, my resume, resume templates, standard resume",
  },
}
