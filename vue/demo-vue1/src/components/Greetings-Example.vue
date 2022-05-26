<template>
    <div>{{ greeting }} {{ who }}</div>
</template>

<script>
    export default {
        //props:{
        // greeting:{
        //     type:String,
        //     required:false,
        //      default:'hola'
        // },
        // who:{
        //     type:String,
        //     required:true,
        // }
        //}
        props: ['greeting', 'who']
    }
</script>