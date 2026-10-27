export const OPEN_PALETTE_EVENT = 'open-command-palette';

export const openCommandPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));

export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
