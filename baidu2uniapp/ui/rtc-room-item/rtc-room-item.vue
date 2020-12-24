<template>
		<view
		:class="['onekit-rtc-room-item',onekitClass]"
		:style="onekitStyle"
		:id="onekitId"
		>
		<slot></slot>
		</view>
</template>

<script>
import baidu_behavior from "../../behaviors/baidu_behavior"
import onekit_behavior from "../../behaviors/onekit_behavior"
  export default {
    name: "onekit-rtc-room-item",
    mixins: [baidu_behavior, onekit_behavior],
    props: {
	
		
	},
	methods:{
		
	}
}
</script>

<style>
</style>
