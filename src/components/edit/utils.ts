export const href = (gameId: string | number): string =>
  `/addNewGame/${gameId}`;

//: `updateClientGame/${gameId}`;

export const isEditLoading = (
  loadingMap: Record<string, boolean> | undefined,
  gameId: string | number
) => (loadingMap ? !!loadingMap[gameId] : false);
