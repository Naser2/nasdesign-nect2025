// import { Project } from "../typings";
  console.log("IN_APP_API", `${process.env.NEXT_LOCAL_BASE_URL}/api/getTracks`);

export const fetchTracks = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/src/api/getTracks`
  // );

  const res = await fetch( "../api/getTracks");

  console.log("RES", res);
  const data = await res.json();
  const tracks = data.tracks;

  console.log("Fetching--TRACKS", tracks);

  return tracks;
};
