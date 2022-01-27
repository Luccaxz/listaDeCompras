Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button class="btnAcao" ><i class="fa fa-pencil"></i></button>\
        <button class="btnAcao2" v-on:click="$emit(\'remove\')"><i class="fa fa-trash"></i></button>\
      </li>\
    ',
    props: ['title']
  })



new Vue({
    el: '#topo',
    data: {
      newTodoText: '',
      todos: [
        
       
        {
          id: 3,
          title: ' Seu carrinho está vazio'
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  })
