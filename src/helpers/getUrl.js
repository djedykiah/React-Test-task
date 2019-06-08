const getUrl = (url) => {
  return (
    fetch(
      url,
    )
      .then(response => response.json())
  );
};

export default getUrl;
