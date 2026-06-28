import { STORAGE_KEYS } from "../utils/constants.js";
import { Storage } from "./storageService.js";

export function createSession(user) {
    Storage.set(STORAGE_KEYS.SESSION, user);
}

export function getSession() {
    return Storage.get(STORAGE_KEYS.SESSION);
}

export function clearSession() {
    Storage.remove(STORAGE_KEYS.SESSION);
}

export function hasSession() {
    return getSession() !== null;
}