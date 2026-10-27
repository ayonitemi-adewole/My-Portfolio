import { useCallback } from 'react';
import { useToast } from './useToast';

export const useCopy = () => {
  const toast = useToast();
  return useCallback(
    async (text, label = 'Copied to clipboard') => {
      try {
        await navigator.clipboard.writeText(text);
        toast(label);
      } catch {
        toast("Couldn't copy — please copy it manually", { type: 'error' });
      }
    },
    [toast]
  );
};
