export type loadingMapProps = {
  loadingMap?: Record<string, boolean>;
};

export const checkLoading = (loadingMap: loadingMapProps) =>
  Object.values(loadingMap).some(Boolean);
