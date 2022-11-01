import { writable } from 'svelte/store';

export const tokenStore = writable(null);

export const loginError = writable(null);