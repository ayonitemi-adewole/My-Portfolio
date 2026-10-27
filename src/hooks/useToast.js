import { createContext, useContext } from 'react';

export const ToastContext = createContext(() => {});

// Returns toast(message, { type: 'success' | 'error' | 'info' }).
export const useToast = () => useContext(ToastContext);
