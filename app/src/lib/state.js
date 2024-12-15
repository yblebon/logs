import { writable } from "svelte/store";

const currentTagsStore = writable([]);

export default currentTagsStore;
