import Image from 'next/image'

const API_KEY  = process.env.API_KEY
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  // QUERY FOR FETCHING DATA
  const language = "en-US";
  const pageNum = "1";
  const genreParamsCheck = genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.org/3/${genreParamsCheck}?api_key=${API_KEY}&language=${language}&page=${pageNum}`,
     { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  const results = data.results;
  
  return (
    <h1 className='text-red-400'>Home</h1>
  )
}
