<template>
    <div>
    	<p>Counter is: {{ doubleCounter }}</p>
    	<p>counter hal is {{halCounter}}</p>
    	<input type="text" :value="value" @input="updateValue"/>
    	<p>{{$store.getters.updateValue}}</p>
    </div>
</template>

<script>
	import { mapGetters } from 'vuex';
    export default {
    	data () {
    		return {
    			value : this.$store.getters.updateValue
    		}
    	},
        computed : mapGetters(['doubleCounter', 'halCounter']),
        methods : {
        	updateValue (event) {
        		this.$store.dispatch("updateValue", event.target.value);
        	}
        }
    }
</script>