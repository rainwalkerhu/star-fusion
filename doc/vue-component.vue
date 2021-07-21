<template>
    <button :className="['btn', classes]" :style="{backgroundColor: color}">
        <em>{text}</em>
    </button>
</template>
<script>
export default {
    props: {
        classes: {
            type: String,
            default: 'cut-button'
        },
        color: {
            type: String,
            default: 'blue'
        },
        text: {
            type: String,
            default: 'http://jartto.wang'
        },
    }
}
</script>
<style scoped>
.cut-button {}
</style>