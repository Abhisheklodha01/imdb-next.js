import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${process.env.TMDB_KEY}&language=hi-IN&page=2`,
  )
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Results results={results} />
    </div>
  );
}
