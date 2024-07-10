import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as z from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ZodTests() {
  const User = z.object({
    username: z.string().max(2, { message: 'too big my mf' }),
  });

  const y = User.safeParse({ username: '12345' }).error?.issues[0]?.message;
  console.log(y);
}
