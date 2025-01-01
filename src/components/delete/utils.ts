export const isDeleteLoading = (
  loadingMap: Record<string, boolean> | undefined,
  gameId: string | number
) => (loadingMap ? !!loadingMap[gameId] : false);
