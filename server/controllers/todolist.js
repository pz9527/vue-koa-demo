import todolist from '../models/todolist.js'

const getTodolistByStatus = async function (ctx) {
  const status = ctx.query.status // 获取url里传过来的参数里的id
  const result = await todolist.getTodolistByStatus(status) // 通过await “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}
const getTodolistById = async function (ctx) {
  const id = ctx.params.id// 获取url里传过来的参数里的id
  const result = await todolist.getTodolistById(id) // 通过await “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

const createTodolist = async function (ctx) {
  const data = ctx.request.body
  const result = await todolist.createTodolist(data)

  ctx.body = {
    success: true
  }
}

const removeTodolist = async function (ctx) {
  const id = ctx.params.id
  const result = await todolist.removeTodolist(id)

  ctx.body = {
    success: true
  }
}

const updateTodolist = async function (ctx) {
  const id = ctx.params.id
  let status = ctx.params.status

  const result = await todolist.updateTodolist(id, status)

  ctx.body = {
    success: true
  }
}

export default {
  getTodolistByStatus,
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
