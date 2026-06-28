import { USER_ROLES, STORAGE_KEYS } from "../utils/constants.js";
import { Storage } from "./storageService.js";
import { createSession } from "./sessionService.js";

export function initializeOwner() {

    const owner = Storage.get(STORAGE_KEYS.OWNER);

    if (owner) return;

    Storage.set(STORAGE_KEYS.OWNER, {
        id: 1,
        username: "owner",
        password: "admin123",
        role: USER_ROLES.OWNER
    });

}

export function login(username, password) {

    const owner = Storage.get(STORAGE_KEYS.OWNER);

    if (
        owner &&
        owner.username === username &&
        owner.password === password
    ) {
        createSession(owner);
        return true;
    }

    return false;

}

export function logout() {
    Storage.remove(STORAGE_KEYS.SESSION);
}