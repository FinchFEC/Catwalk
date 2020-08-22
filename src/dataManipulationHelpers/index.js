exports.calcAvgRating = (array) => {
  let averageRating = 0;
  let ratingsCount = 0;
  let totalRating = 0;
  array.forEach((rating) => {
    ratingsCount += 1;
    totalRating += rating.rating;
  });
  averageRating = Number((totalRating / ratingsCount).toFixed(2));
  if (isNaN(averageRating)) {
    averageRating = 0;
  }
  return averageRating;
};