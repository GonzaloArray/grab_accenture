import { defineStore } from "pinia";
import confetti from "canvas-confetti";
import router from "../router";



export const useConfetti = defineStore('confetti', ()=> {

    function handleConfetti() {
        var end = Date.now() + (2 * 1000);
    
        // go Buckeyes!
        var colors = ['#71A5D3', '#ffffff'];
    
        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });
    
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    return{
        handleConfetti
    }
})