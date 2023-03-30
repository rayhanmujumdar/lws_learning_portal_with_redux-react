const defaultPlayerRouteId = () => {
  return JSON.parse(localStorage.getItem("videoId"));
};

export default defaultPlayerRouteId;
