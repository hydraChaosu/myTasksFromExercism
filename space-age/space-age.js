const EARTHDAYS = 365.25;
const SECONDSTODAYS = 60 * 60 * 24;
const PLANETS = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export const age = (planetName, seconds) => {
  return Number(
    (seconds / SECONDSTODAYS / (PLANETS[planetName] * EARTHDAYS)).toFixed(2)
  );
};
