// import { useMutation, useQueryClient } from "@tanstack/react-query";

// export const useEditGame = () => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: UpdateGameById,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["games"] });
//     }
//   });

//   return {
//     ...mutation,
//     isLoading: mutation.isPending
//   };
// };
