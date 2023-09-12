import DB from './services/DB.js'
import Router from './services/Router.js'

window.DB = DB
window.Router = Router

window.addEventListener('DOMContentLoaded', () => {
  DB.init()
  Router.init()
})
