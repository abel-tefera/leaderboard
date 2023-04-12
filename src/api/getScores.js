import { BASE_URL, GAME_ID } from "./constants.js";

export const getScores = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/${GAME_ID}/scores`);
    const { result } = await response.json();

    result.sort((a, b) => {
      const x = parseInt(a.score);
      const y = parseInt(b.score);
      return x < y ? 1 : x > y ? -1 : 0;
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};
