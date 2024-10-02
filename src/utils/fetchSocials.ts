// import { Social } from "../typings";



// console.log("GET___SOCIALS",`${process.env.NEXT_PUBLIC_BASE_URL}/pages/api/getSocials`)
export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/src/api/getSocials`)
  // console.log("fetching getSocials", res);
  const data = await res.json();
  const socials = data.socials;

  console.log("fetching Social Parsed", socials);

  return socials;
};
