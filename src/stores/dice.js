import { defineStore } from "pinia";

export const useDiceStore = defineStore("dice", {
    state: () => ({
        count: 0
    }),
    getters: {},
    actions: {
        randomize() {
            this.count = Math.floor(Math.random() * 6) ;
        }
    }
});