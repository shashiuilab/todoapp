<template>
    <div class="container-fluid w-75 shadow">
        <div class="row">
            <div class="col-xs-12 col-md-12 col-md-offset-2">
               <app-todo-header></app-todo-header>  
               <app-newtask></app-newtask>
               <!--<app-statusBadges :pendingTasks="activeTasks.length" :doneTasks="completedTasks.length"></app-statusBadges>-->
                <div class="shadow pl-4 pr-4 mb-4">
                    <button type="button" class="btn btn-primary">
                    Pending Tasks <span class="badge badge-light">{{activeTasks.length}}</span>
                    </button>
                    <button type="button" class="btn btn-warning">
                    Completed Tasks <span class="badge badge-light">{{completedTasks.length}}</span>
                    </button>
                </div>
               <app-activeTasks :activeTasks="activeTasks"></app-activeTasks>
               <div class="pl-4"><button class="btn btn-info" @click="clearCompleted">Clear Completed Tasks</button></div>
               <app-completedTasks :completedTasks="completedTasks"></app-completedTasks>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import NewTask from './components/NewTask.vue'
    import StatusBadges from './components/StatusBadges.vue'
    import CompletedTasks from './components/CompletedTasks.vue'
    import ActiveTasks from './components/ActiveTasks.vue'
    import { eventBus } from './main.js'
    export default {
        data () {
            return {
                activeTasks : [],
                completedTasks : []
            }
        },
        components: {
            'app-todo-header' : TodoHeader,
            'app-newtask' : NewTask,
            'app-statusBadges': StatusBadges,
            'app-activeTasks' : ActiveTasks,
            'app-completedTasks' : CompletedTasks
        },
        created () {
            eventBus.$on("addNewTask", data=> {
                this.activeTasks.push(data);
            });
            eventBus.$on("completeTask", data=> {
                var index = this.activeTasks.indexOf(data);
                if (index > -1) {
                    this.activeTasks.splice(index, 1);
                }
                this.completedTasks.push(data);
            });
            eventBus.$on("removeComplete", data=> {
                var index = this.completedTasks.indexOf(data);
                if (index > -1) {
                    this.completedTasks.splice(index, 1);
                }
            });
        },
        methods : {
            clearCompleted() {
                this.completedTasks = [];
            }
        }
    }
</script>

