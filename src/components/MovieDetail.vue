<template>
    <div id="moviedetail">
        <p v-for="(item,key) in words" :key="key"> 
            {{item}} <i class="fa fa-angle-double-right" aria-hidden="true"></i> {{response[item]}} 
        </p>
    </div>
</template>

<script>
export default {
    name: 'moviedetail',
    props: {
        response: Object,
        words: Array
    }
}
</script>

<style scoped>
p {
    border-bottom: 2px solid #626d5a;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #c5c5c5;
}
</style>
