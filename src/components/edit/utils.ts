export const href = (
  gameId: string | number,
  isServer: boolean | undefined
): string =>
  isServer ? `/addNewGame/${gameId}` : `updateClientGame/${gameId}`;
