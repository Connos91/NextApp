import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchGames } from "../lib/api"

export const useGetGames = () => {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
    staleTime: 60 * 1000
  })

  const updateGamesCache = (newGame: any) => {
    queryClient.setQueryData(['games'], (oldData: any[] | undefined) => {
      if (oldData) {
        return [...oldData, newGame];
      }
      return [newGame];
    });
  };

  return {
    ...query,
    updateGamesCache,
  }
}