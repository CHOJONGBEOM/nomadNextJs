import { APIURL } from "../app/(home)/page";

async function getMovie(id: string) {
  try {
    const response = await fetch(`${APIURL}/${id}`);
    const textResponse = await response.text(); //json이 아니면 text로출력
    //console.log(textResponse);

    return JSON.parse(textResponse);
  } catch (error) {
    //console.error("Error fetching getMovie", error);
    return null;
  }
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h5>{JSON.stringify(movie)}</h5>;
}
