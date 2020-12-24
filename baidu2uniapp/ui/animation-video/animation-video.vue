<template>
  <view
  :class="['onekit-animation-video',onekitClass]"
  :style="onekitStyle"
  :id="onekitId"

  :adpid="unitId"

  @load="adCustom_load"
  @error="adCustom_error"
  >
    <slot></slot>
  </view>
</template>

<script>
  import baidu_behavior from "../../behaviors/baidu_behavior"
  import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-animation-video",
    mixins: [baidu_behavior, onekit_behavior],
    props: {
      "unit-id": {
        type: String,
        defaul: ""
      },
      "ad-intervals": {//做不了
        type: Number,
        defaul: null
      },
    },
    methods: {
      adCustom_load(e){
		  	this.$emit('load',e)
      }, 
      adCustom_error(e){
		  	this.$emit('error',e)
      }, 
    }
  }
</script>

<style>
</style>