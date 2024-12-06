import * as z from 'zod';

export const UserProviderSchema  = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    image: z.string().optional(),
});