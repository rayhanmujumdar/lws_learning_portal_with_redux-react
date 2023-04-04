const defaultPlayerRouteId = () => {
  const videoId = JSON.parse(localStorage.getItem("videoId"));
  return videoId;
};

export default defaultPlayerRouteId;
