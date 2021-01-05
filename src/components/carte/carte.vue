<template>
	<svg-map :map="France" />
</template>

<script>
import { SvgMap } from "vue-svg-map";
import France from "@svg-maps/france.regions";

export default {
	name: "MyMap",
	components: {
		SvgMap
	},
	data() {
		return {
			France
		};
	}
};
</script>

<style src="vue-svg-map/dist/index.css"></style>