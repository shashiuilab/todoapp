import Vue from 'vue';
import App from './App.vue'
import User from './components/User.vue'
import Home from './components/Home.vue'
import UserNum from './components/UserNum.vue'
import Header from './components/Header.vue';
export const routes = [
	{ path: '/', components : {
		default : Home,
		'header-top' : Header
	}},
	{ path: '/user', component : User},
	{ path: '/user/:id', component : UserNum, name: 'UserNum'}
]