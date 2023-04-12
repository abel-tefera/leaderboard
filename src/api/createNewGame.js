import { BASE_URL } from "./constants.js";

export const createNewGame = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games/`, {
      method: "POST",
      body: JSON.stringify({
        name: "Gebeta Board Game",
      }),
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }

  // Game id: qUEIX71lpdhq427AfSv3
  // cxTYIcB0AyRhOLO5ia3C
};
