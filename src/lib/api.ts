import * as C from "./constants"

interface Game {
  [id: string]: string | number;
  title: string;
  category: string;
}

export const fetchGames = async(): Promise<Game[]> => {
  const response = await fetch(`${C.API_URL}${'game'}`);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json();
}

export const addGame = async(game: { title: string; category: string }): Promise<Game> => {
  const res = await fetch(`${C.API_URL}${'game'}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to add game');
  return res.json();
}

export const deleteGame = async(id:string): Promise<void> => {
  const response = await fetch(`${C.API_URL}${`game/${id}`}`,{
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error("Failed to delete the game");
  return response.json();
}
  