import { slides } from "./data.js";
const { createApp } = Vue;

createApp({
    data(){
        return{
            slides: slides,
            activeIndexSlide: 0
        }
    },
    methods: {
        nextImg(){
            if(this.activeIndexSlide < this.slides.length - 1){
                this.activeIndexSlide++
            } else {
                this.activeIndexSlide = 0
            }
        },
        prevImg(){
            if(this.activeIndexSlide > 0){
                this.activeIndexSlide--;
            } else {
                this.activeIndexSlide = this.slides.length -1;
            }
        },
        goToImg(index){
            this.activeIndexSlide = index
        },
    },
    mounted() {
        let intImg = setInterval(this.nextImg, 3000);
        let int = document.getElementById('thumb-id');
        int.addEventListener('mouseover', function(){
            clearInterval(intImg);
        })
    },
}).mount('#app')