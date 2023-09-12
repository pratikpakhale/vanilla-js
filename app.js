import DB from './services/DB.js'

window.todos = []
window.DB = DB

window.addEventListener('DOMContentLoaded', () => {
  DB.init()
})
