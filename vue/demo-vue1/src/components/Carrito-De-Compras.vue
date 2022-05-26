<template>
    <div>
        <ul>
            <li v-for="(articulo, index) in listaProductos" :key="index">{{articulo.id}} - {{articulo.nombre}} - {{articulo.precio}}
                <input type="text" :id="`txt-${articulo.id}`" :ref="`txt-${articulo.id}`" v-model="articulo.cantidad"/>
                <button @click="totalProducto(articulo)">Add</button>
            </li>
        </ul>
        <p>Tienes {{productos}} productos con total de {{total}} en el carrito. <button @click="vaciarCarrito()">Vaciar Carrito</button></p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                productos: 0,
                total: 0,
                listaProductos:[
                    {"id":"1", "nombre":"consola", "precio":"100", "cantidad":"0"},
                    {"id":"2", "nombre":"control", "precio":"20", "cantidad":"0"}
                ]
            }
        },
        methods:{
            totalProducto:function(articulo){
                // console.log(articulo.nombre);
                // console.log(this.productos);
                // console.log(articulo.cantidad);
                this.productos += parseInt(articulo.cantidad);
                this.total += (articulo.cantidad * articulo.precio);

                articulo.cantidad = 0;

                //console.log(this.$refs[`txt-${articulo.id}`].value);
            },

            vaciarCarrito:function(){
                this.productos = 0;
                this.total = 0;
            }
        }
    }
</script>