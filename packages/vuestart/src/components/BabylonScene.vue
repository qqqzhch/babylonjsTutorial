<template>
  <canvas ref="bjsCanvas" />
</template>
<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "./MyFirstScene";

// var myScene;
export default {
  name: "BabylonScene",
  props: {
    width: {
      type: String,
      default: () => {
        return document.documentElement.clientWidth+"px";
      },
    },
    height: {
      type: String,
      default: () => {
        return document.documentElement.clientHeight+"px";
      },
    },
    name:{
      type:String,
      default: () => {
        return '';
      }
    },
    m3dName:{
      type:String,
      default: () => {
        return '';
      }

    }
  },
  setup() {
    const bjsCanvas = ref(null);
    bjsCanvas.height = document.documentElement.clientHeight;

    onMounted(() => {
      if (bjsCanvas.value) {
        bjsCanvas.value.width = document.documentElement.clientWidth;
        bjsCanvas.value.height = document.documentElement.clientHeight;
        
       createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      const bjsCanvas = this.$refs.bjsCanvas;
      
      if(bjsCanvas){
        console.log(document.documentElement.clientWidth,document.documentElement.clientHeight);
        bjsCanvas.style.width = document.documentElement.clientWidth+"px";
        bjsCanvas.style.height = document.documentElement.clientHeight+"px";
        bjsCanvas.width = document.documentElement.clientWidth;
        bjsCanvas.height = document.documentElement.clientHeight;
        // myScene.getEngine().resize();

      }
      
      
    }
  },
};
</script>