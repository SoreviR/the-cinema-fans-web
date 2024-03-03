export const getMovieReview = async (movieid: string) => {
  const movieUrl = `https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=8df3ffa86c0ab3d6b3421e6a7d051382&language=en-US&page=1`;
  try {
    const response = await fetch(movieUrl, { cache: "no-cache" });
    const data = await response.json();
    const reviewData = await data.results;

    // console.log(reviewData);

    return reviewData;
  } catch (error) {
    console.error(error);
  }
};
