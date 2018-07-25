<template>
    <ul class="list-group pl-4 pr-4 pt-2">
      <li class="list-group-item list-group-item-action list-group-item-success" v-for="completedTask in completedTasks" @click="removeComplete">{{completedTask}}</li>
    </ul>
</template>
<script>
    import { eventBus } from '../main.js'
	export default {
        props : ["completedTasks"],
        methods : {
            removeComplete() {
                eventBus.$emit("removeComplete", event.target.innerHTML);
            }
        }
	}
</script>