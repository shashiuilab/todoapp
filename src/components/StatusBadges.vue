
<template>
    <div class="shadow pl-4 pr-4 mb-4 col-xs-12">
        <button type="button" class="btn btn-primary">
        Pending Tasks <span class="badge badge-light">{{pendingTasks.length}}</span>
        </button>
        <button type="button" class="btn btn-warning">
        Completed Tasks <span class="badge badge-light">{{doneTasks.length}}</span>
        </button>
    </div>
</template>
<script>
	export default {
        props : ["pendingTasks", "doneTasks"]
	}
</script>