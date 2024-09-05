import { error } from "console";
import { json } from "stream/consumers";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";
import { Suspense } from "react";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <>
      <h1>Movie Detail Page</h1>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Video</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </>
  );
};
export default page;
