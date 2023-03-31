const validYoutubeUrl = (url) => {
    return String(url)
      .toLowerCase()
      .match(
        /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/
      );
  };
  
  export default validYoutubeUrl