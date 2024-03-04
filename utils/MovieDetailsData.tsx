export const getMovieDetails = async (movieid: string) => {
  const movieUrl = `https://api.themoviedb.org/3/movie/${movieid}?api_key=8df3ffa86c0ab3d6b3421e6a7d051382&language=en-US&page=1&?language=en-US
    `;
  try {
    const response = await fetch(movieUrl, { cache: "no-cache" });
    const data = await response.json();
    const movieData = await data;

    // console.log(movieData);

    return movieData;
  } catch (error) {
    console.error(error);
  }
};
