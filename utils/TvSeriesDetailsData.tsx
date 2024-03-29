export const getSerieDetails = async (serieid: string) => {
  const serieUrl = `https://api.themoviedb.org/3/tv/${serieid}?api_key=8df3ffa86c0ab3d6b3421e6a7d051382&language=en-US&page=1&?language=en-US
      `;
  try {
    const response = await fetch(serieUrl, { cache: "no-cache" });
    const data = await response.json();
    const serieData = await data;

    // console.log(serieData);

    return serieData;
  } catch (error) {
    console.error(error);
  }
};
