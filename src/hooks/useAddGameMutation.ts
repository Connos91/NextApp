import { useMutation,useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useGetGames } from './useGetGames';
import { addGame } from '@/lib/api';

export const useAddGameMutation = () => {
  const { updateGamesCache } = useGetGames();
  const router = useRouter();
  const queryClient = useQueryClient()

  const mutation= useMutation({
    mutationFn: addGame,
    onMutate: async (newGame) => {
      updateGamesCache(newGame);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] });
    },
    onSuccess: () => {
      router.push('/dashboard');
    },
  });

  return {
    ...mutation,
    isLoading: mutation.isPending
  };  
};


