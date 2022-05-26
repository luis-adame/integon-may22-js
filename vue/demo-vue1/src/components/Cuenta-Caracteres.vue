<template>
    <div>
        Cuenta Caracteres: <input type="text" id="cuentatxt" v-model="textoCaja" @keyup="actualizaCuenta"/>
        <p>Tecleados {{cuentaCaracteres}} caracteres.</p>
    </div>
</template>

<script>
    export default{
        beforeCreate(){

        },
        created(){

        },
        beforeMount(){

        },
        mounted(){
          this.actualizaCuenta()
        },
        data(){
            return{
                cuentaCaracteres: 0,
                textoCaja: "TEXTO PRUEBA"
            }
        },
        methods:{
            actualizaCuenta: function(){
                this.cuentaCaracteres = this.textoCaja.length
            }
        }
    }
</script>