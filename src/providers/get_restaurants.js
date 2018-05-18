export default (city, region) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://us-central1-yemeksepetix-api.cloudfunctions.net/app/restaurants/${
        city.key
      }/${region.key}`
    )
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(x => reject(x));
  });
};
