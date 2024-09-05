import { APIURL } from "../app/(home)/page";

async function getVideos(id: string) {
  try {
    const response = await fetch(`${APIURL}/${id}/videos`);
    const textResponse = await response.text(); //json이 아니면 text로출력
    //console.log(textResponse);
    return JSON.parse(textResponse);
  } catch (error) {
    //console.error("Error fetching getVideo", error);
    return null;
  }
}
export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h5>{JSON.stringify(videos)}</h5>;
}
