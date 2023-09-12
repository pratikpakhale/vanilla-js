const DB = {
  init() {
    const deaultValues = {
      default: ['deault todo'],
    }

    const todos = this.getTodos()

    if (!todos) {
      this.saveTodos(deaultValues)
    }

    window.todos = todos
  },

  getTodos() {
    return JSON.parse(localStorage.getItem('todos'))
  },

  saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
  },

  addTodo(todo, category) {
    const todos = this.getTodos()
    if (!todos[category]) {
      todos[category] = []
    }

    todos[category].push(todo)

    this.saveTodos(todos)
  },

  deleteTodo(todo, category) {
    const todos = this.getTodos()
    if (!todos[category]) {
      return false
    }
    todos[category] = todos[category].filter(td => {
      if (todo == td) return false
      return true
    })

    this.saveTodos(todos)
  },
}

export default DB
