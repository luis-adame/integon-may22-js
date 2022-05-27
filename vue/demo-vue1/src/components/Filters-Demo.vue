<template>
    <div id="app">
        <p>{{ '7 char' | ellipsis }}</p>
        <p>{{ '14 characters' | ellipsis }}</p>
        <p>{{ 'More than 14 characters' | ellipsis }}</p>
        <p>{{ null | ellipsis }}</p>
        <p>{{ 55 | ellipsis }}</p>
        <p>{{dato}}</p>
    </div>
</template>

<script>
    export default {
        props:{
            dato: String
        },
        filters: {
            ellipsis(value) {
                if (!value) return
                return value.length > 14 ? `${value.slice(0, 11)}...` : value
            }
        }
    }
</script>
