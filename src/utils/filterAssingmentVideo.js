const filterAssignmentVideo = (assignments, videos) => {
  let filterVideo = [];
  if (videos?.length > 0) {
    videos.forEach((video) => {
      if (assignments.length > 0) {
        assignments.forEach((assignment) => {
          if (video.id !== assignment.video_id) {
            filterVideo.push(video);
            if (videos.length === assignments.length) {
              filterVideo = [];
            }
          }
        });
      } else {
        filterVideo.push(video);
      }
    });
  }
  return filterVideo;
};

export default filterAssignmentVideo;
