<template>
  <div id="app">
    <AppHeader />
    <div class="flex flex-col md:flex-row">
      <AppProfileForm />
      <AppProfileDisplay />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/App-Header.vue'
import AppProfileForm from './components/App-Profile-From.vue'
import AppProfileDisplay from './components/App-Profile-Display.vue'

export default {
  components: {
    AppHeader,
    AppProfileForm,
    AppProfileDisplay
  }
}
</script>
