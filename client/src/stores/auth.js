import { writable } from 'svelte/store';
import decode from "jwt-decode";

// if (token) {
//     payload = decode($token);
// }

export const token = writable(null);
export const user = writable(null);