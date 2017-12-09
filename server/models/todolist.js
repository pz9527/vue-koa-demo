import db from '../config/db.js' // 引入todolist的表结构
const todoModel = '../schema/list.js'
const TodolistDb = db.Todolist // 引入数据库
const format = require('date-fns/format');
const Todolist = TodolistDb.import(todoModel)

const getTodolistById = async function (status) {
  const todolist = await Todolist.findAll({ // 查找全部的todolist
    where:{
      status:status
    },
    order: "id DESC",
    limit : 200,
    attributes: ['id', 'content', 'status','name','number','diningform','date','department'] //
  })

  return todolist // 返回数据
}

const createTodolist = async function (data) {
  await Todolist.create({
    name: data.name.toString(),
    content: data.content,
    status: data.status||0,
    diningform:data.diningform,
    date:format(data.date, 'YYYY-MM-DD HH:mm:ss'),
    number:data.number,
    department:data.department,
    user_id:data.user_id
  })
  return true
}

const removeTodolist = async function (id) {
  await Todolist.destroy({
    where: {
      id
    }
  })
  return true
}

const updateTodolist = async function (id, status) {
  await Todolist.update(
    {
      status:status
    },
    {
      where: {
        id,
      }
    }
  )
  return true
}

export default {
  getTodolistById,
  createTodolist,
  removeTodolist,
  updateTodolist
}
