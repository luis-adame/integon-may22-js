<template>
  <div>
      <p>
          El resultado de la operacion {{num1}} {{operador}} {{num2}} es: {{operacion(operador, num1, num2)}}
      </p>
      <p>
          El resultado de la operacion {{num1}} + {{num2}} es: {{resultado}}
      </p>
      <p>
          {{mayusculas ? texto.toUpperCase(): texto}}
      </p>

      <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <ul>
            <li>{{ items[0] }}</li>
            <li>{{ items[1] }}</li>
            <li>{{ items[2] }}</li>
        </ul>
    </div>
    </div>
</template>

<style lang="scss">
    @import '../assets/styles/typography.scss';
</style>

<script>
export default {
  name: 'MatematicoWord',
  props: {
    num1: Number,
    num2: Number,
    operador: String
  },

  data(){
      return{
        resultado: 0,
        texto: "Texto de ejemplo",
        mayusculas: true,

        title: 'My list component!',
        subtitle: 'Vue JS basics',
        items: ['Item 1', 'Item 2', 'Item 3']

      }
  },

  methods:{
      calculaOperacion:function(){
          this.resultado = parseInt(this.num1) + parseInt(this.num2);
      },

      operacion(operador, num1, num2){
          switch(operador){
              case '+': return this.suma(num1, num2);
              case '-': return this.resta(num1, num2);
              default: return 0;
          }
      },

      suma(num1, num2){
          return parseInt(num1) + parseInt(num2)
      },

      resta(num1, num2){
        return parseInt(num1) - parseInt(num2)
      }
  },

  watch:{
      $props:{
          handler(){
              this.calculaOperacion();
          },
          immediate:true
      }
  }
}

</script>