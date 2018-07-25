<template>
    <div class="input-group shadow pl-4 pr-4 mb-4">
        <input type="text" class="form-control" placeholder="Enter Task" v-model="newTask">
        <div class="input-group-append">
            <button class="btn btn-success" @click.prevent="addNewTask">Add</button> 
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        data () {
            return {
                newTask : ''
            } 
        },
        methods : {
            addNewTask() {
                eventBus.$emit("addNewTask", this.newTask);
                this.newTask = '';
            }
        }
    }
</script>

