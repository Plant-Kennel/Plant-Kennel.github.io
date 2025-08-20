import { defineStore } from "pinia";
import { ref } from "vue";

export const useDiceStore = defineStore("dice", () => {
    const diceValue = ref(1); //initial value

    const roll = () => {
        diceValue.value = Math.floor(Math.random() * 6) ;
    };

    return { diceValue, roll };
});