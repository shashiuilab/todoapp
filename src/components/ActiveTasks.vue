<template>
    <ul class="list-group pl-4 pr-4 pb-2">
      <li class="list-group-item list-group-item-action list-group-item-danger" v-for="activeTask in activeTasks" @click="completeTask">{{activeTask}}</li>
    </ul>
</template>
<script>
    import { eventBus } from '../main.js'
	export default {
        props : ["activeTasks"],
        methods : {
            completeTask(event) {
                eventBus.$emit("completeTask", event.target.innerHTML);    
            }
        }
	}
</script>