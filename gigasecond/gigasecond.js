export const gigasecond = time => {
  return new Date(time.getTime() + 1000000000000);
};
// return new Date(time.getTime() + Math.pow(10, 12));
