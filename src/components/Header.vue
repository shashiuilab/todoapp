<template>
	<div class="col-xs-12 col-md-offset-3">
		<h2>This is VUEX</h2>
		<p>{{$store.state.counter}} clicks</p>
		<p>{{$store.getters.doubleCounter}}</p>
		<p>{{$route.params.id}}</p>
		<router-link tag='button' class='btn btn-primary' to='/'>Home</router-link>
		<router-link tag='button' class='btn btn-primary' :to='{name: "UserNum", params : { id: $store.state.counter}}'>user</router-link>
	</div>
</template>