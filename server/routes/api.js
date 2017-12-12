import api from '../controllers/todolist.js'
import koa_router from 'koa-router'
const router = koa_router()

router.get('/todolist', api.getTodolistByStatus),
router.get('/todolist/:id', api.getTodolistById),
router.post('/todolist', api.createTodolist),
router.delete('/todolist/:id', api.removeTodolist),
router.put('/todolist/:id/:status', api.updateTodolist)

export default router
