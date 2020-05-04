<template>
    <div :class="classname">
        {{tasks}}
    </div>
</template>

<script>

export default {  
    name: 'TaskLine',
    props: ['classname', 'tasks'],
}
</script>

<style scoped>
.odd{
    background-color: #F7F9FC;
    border-left: 1px solid #ABB5C3;
}
.even{
    background-color: #F1F6FB;
    border-left: 1px solid #ABB5C3;
}
</style>