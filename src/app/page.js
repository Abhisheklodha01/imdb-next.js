import Results from "@/components/Results";
import axios from "axios";

export default async function Home({ searchParams }) {
  let results = []
  try {
    const genre = searchParams.genre || 'fetchTrending'
    const res = await axios.get(
      `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    ).then((response) => response.data)
    results = res.results
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <Results results={results} />
    </div>

  );
}
