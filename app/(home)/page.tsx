import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const APIURL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovie() {
  const response = await fetch(APIURL);
  const json = await response.json();
  return json;
}

const HomePage = async () => {
  const movies = await getMovie();
  return (
    <>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
      <h1>Hello!</h1>
    </>
  );
};
export default HomePage;
