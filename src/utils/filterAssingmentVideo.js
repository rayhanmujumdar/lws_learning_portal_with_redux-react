const filterAssignmentVideo = (assignments, videos) => {
  let filterVideo = [];
  if (videos?.length > 0 && assignments?.length !== videos?.length) {
    videos.forEach((video) => {
      const index = assignments.findIndex(
        (assignment) => assignment.video_id === video.id
      );
      if (index === -1) {
        filterVideo.push(video);
      }
    });
  }
  return filterVideo;
};

export default filterAssignmentVideo;
