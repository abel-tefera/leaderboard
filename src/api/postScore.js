import { BASE_URL, GAME_ID } from "./constants";

export const postScore = async (user, score) => {
  try {
    await fetch(`${BASE_URL}/games/${GAME_ID}/scores`, {
      method: "POST",
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    
  } catch (err) {
    console.error(err);
  }
};
