<template>
    <div class="container">
        <h1>Async fetch</h1>
        <button @click="getApi()">Learn something profound</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                axiosResponse: {},
            }
        },

        computed: {
            quote() {
                return this.axiosResponse && this.axiosResponse.slip
                ? this.axiosResponse.slip.advice
                : null
            },
        },

        methods: {
            async getApi() {
                return axios.get('https://api.adviceslip.com/advice').
                then((response) => {
                console.log(response)
                })
            },
        },
    }
</script>