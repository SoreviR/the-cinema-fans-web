export const getSeries = async (page: string | string[]) => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=8df3ffa86c0ab3d6b3421e6a7d051382&page=${page}`;
  try {
    const response = await fetch(url, { cache: "no-cache" });
    const data = await response.json();
    const seriesData = await data.results;

    // console.log(seriesData);

    return seriesData;
  } catch (error) {
    console.error(error);
  }
};
