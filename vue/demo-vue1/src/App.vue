<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <MessageFeed :messages="messages" />
    <MessageEditor @send="onSend($event)" />

    <DemoEventos @TriggerNotification="respuestaEvento"/>

    <TextEditorWithCount />

    <FiltersDemo :dato='lorem | ellipsis'/>

    <CardsExample>
      <!--<template v-slot:image>-->
      <template #image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>

      <!--<template v-slot:title>-->
      <template #title>
        <h2>My Holiday picture</h2>
      </template>

      <!--<template v-slot:description>-->
      <template #description>
        <p>Here I can describe the contents of the picture.</p>
        <p>For example what we can see in the photo is a nice 
        landscape.</p>
      </template>
    </CardsExample>

    <SlottedComponent>
      <h3>Esto va en el slot</h3>
    </SlottedComponent>

    <RepeatExample :config="{ times: 3, content: 'Repeat me.' }" />

    <GreetingsExample :greeting="greeting" :who="who"/>
    <button @click="newGreeting()">New Greeting</button>

    <BindingDemo :dato1=input1 v-bind:dato2=input2 dato3="789" >Markup que fuera destinado a un slot6</BindingDemo>
    <DemoAxios />
    <SearchComponent/>
    <DemoWatcher />
    <EjemplosData/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Matematico :num1="2" :num2="5" operador='-' />
    <CuentaTxt/>
    <EjemploDirectivas />
    <CarritoDeCompras/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Matematico from './components/Matematico.vue'
import CuentaTxt from './components/Cuenta-Caracteres.vue'
import EjemploDirectivas from './components/Ejemplo-Directivas.vue'
import CarritoDeCompras from './components/Carrito-De-Compras.vue'
import EjemplosData from './components/Ejemplos-Data.vue'
import DemoWatcher from './components/Demo-Watcher.vue'
import SearchComponent from './components/Search-Component.vue'
import DemoAxios from './components/Demo-Axios.vue'
import BindingDemo from './components/Binding-Demo.vue'
import GreetingsExample from './components/Greetings-Example.vue'
import RepeatExample from './components/Repeat-Example.vue'
import SlottedComponent from './components/Slotted-Component.vue'
import CardsExample from './components/Cards-Example.vue'
import FiltersDemo from './components/Filters-Demo.vue'
import TextEditorWithCount from './components/TextEditorWithCount-Demo.vue'
import DemoEventos from './components/Demo-Eventos.vue'
import MessageEditor from './components/MessageEditor.vue'
import MessageFeed from './components/MessageFeed.vue'

import {ellipsis} from '../src/utils/filters'

const possibleGreetings = [
    { greeting: 'Hello', who: 'Vue.js' },
    { greeting: 'Hey', who: 'Everyone' },
    { greeting: 'Hi', who: 'JavaScript' }
]

export default {
  name: 'App',
  filters:{
    ellipsis
  },
  data(){
    return{
      input1:'123',
      input2:'456',
      input3:'789',
      currentIndex:0,
      lorem: 'prueba de filtros export',
      messages: []
    }
  },
  components: {
    HelloWorld,
    Matematico,
    CuentaTxt,
    EjemploDirectivas,
    CarritoDeCompras,
    EjemplosData,
    DemoWatcher,
    SearchComponent,
    DemoAxios,
    BindingDemo,
    GreetingsExample,
    RepeatExample,
    SlottedComponent,
    CardsExample,
    FiltersDemo,
    TextEditorWithCount,
    DemoEventos,
    MessageEditor,
    MessageFeed
  },

  computed: {
    currentGreeting() {
      return possibleGreetings[this.currentIndex]
    },
    greeting() {
      return this.currentGreeting.greeting
    },
    who() {
      return this.currentGreeting.who
    }
  },

  methods: {
    newGreeting() {
      this.currentIndex = this.currentIndex === possibleGreetings.length - 1
        ? 0
        : this.currentIndex + 1
    },
    respuestaEvento($msg){
      console.log($msg);
      alert(`clicked ${$msg}`);
    },
    onSend(event) {
      this.messages = [...this.messages, event]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
