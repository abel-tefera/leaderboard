import { BASE_URL, GAME_ID } from "./constants.js";

export const getScores = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/${GAME_ID}/scores`);
    const { result } = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
