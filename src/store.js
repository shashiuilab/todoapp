import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state : {
		counter : 0,
		value : 0
	},
	getters : {
		doubleCounter : state=> {
			return state.counter * 2
		},
		halCounter : state=> {
			return state.counter / 2
		},
		updateValue : state=> {
			return state.value
		}
	},
	mutations : {
		increment : state=> {
			return state.counter++;
		},
		decrement : state=> {
			return state.counter--;
		},
		updateValue : (state, payLoad)=> {
			return state.value = payLoad
		}
	},
	actions : {
		asyncIncrement : context => {
			setTimeout(() => {
				context.commit('increment');
			}, 2000);
		},
		asyncDecrement : context => {
			setTimeout(() => {
				context.commit('decrement');
			}, 2000);
		}
	}
});

