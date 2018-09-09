<template>
  <div class="home">
    <img src="../assets/logo.png">
    <button @click="getTodos()">GET TODOS</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import JsonPlaceholderModule from '../store/modules/jsonplaceholder'

const jpModule = getModule(JsonPlaceholderModule.prototype)
@Component({ name: 'home', layout: 'default' })
export default class Index extends Vue {
  
  async getTodos() {
    await jpModule.fetchTodos()
  }
  
}
</script>
