const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=8df3ffa86c0ab3d6b3421e6a7d051382";
export const getMovies = async () => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    const moviesData = await data.results;
    console.log(moviesData);

    return moviesData;
  } catch (error) {
    console.error(error);
  }
};
