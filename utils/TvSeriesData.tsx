const url =
  "https://api.themoviedb.org/3/discover/tv?api_key=8df3ffa86c0ab3d6b3421e6a7d051382";
export const getSeries = async () => {
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
