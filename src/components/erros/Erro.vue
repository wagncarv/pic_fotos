<template>
    <span class="erro">{{ rotulo }}</span>
</template>

<script>
    export default {
        props: {
            rotulo: {
            required: true,
            type: String
            }
        }
    }

</script>

<style scoped>
    .erro {
        margin: 2px;
        border: 1px solid red;
        padding: 2px;
        background-color: #ED4337;
        font-family: Helvetica, sans-serif;
        color: white;
        text-align: center;
        border-radius: 2px;
        position: absolute;
    }
</style>
