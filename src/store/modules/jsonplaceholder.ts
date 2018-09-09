import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators'
import axios from 'axios'
import store from '@/store'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

@Module({ name: 'todos', namespaced: true, dynamic: true, store })
export default class JsonPlaceholderModule extends VuexModule {
  todos: Todo[] = []

  @MutationAction({ mutate: ['todos'] })
  async fetchTodos() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return ({ todos: data })
  }
}
