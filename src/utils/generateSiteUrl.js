const isDevelopment = process.env.NODE_ENV === 'development' ? true : false
const isProduction = process.env.NODE_ENV === 'production' ? true : false

// let NAME = process.env.NAME
// let TITLE = process.env.TITLE
// let PROJECT_ID = process.env.PROJECT_ID
// let DATA_SET = process.env.DATA_SET
let  NEXT_PUBLIC_BASE_URL



const generateSiteUrl = () => {
  if (isDevelopment) {
    console.log('isDevelopment:', isDevelopment)
    NEXT_PUBLIC_BASE_URL = process.env.NEXT_LOCAL_BASE_URL
   
    return {  NEXT_PUBLIC_BASE_URL }
  } else {
    console.log('isProduction:', isProduction, "NEXT_PUBLIC_BASE_URL", NEXT_PUBLIC_BASE_URL)

    NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

    return {  NEXT_PUBLIC_BASE_URL }
  }
}
export {NEXT_PUBLIC_BASE_URL }
export default generateSiteUrl
