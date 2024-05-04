import { useState, useEffect } from 'react'
// axios ต้อง Import มาใช้เสมอ
import axios from 'axios'

import { Link } from 'react-router-dom'

// เก็บ URL_Base เป็น const
const BASE_URL = 'https://6630e534c92f351c03db7ae3.mockapi.io'

function App() {
  // สร้าง useState สำหรับเก็บข้อมูล หลังจาก get มา
  const [todos, setTodos] = useState([])

  let i = 1

  let todoText

  // สร้าง const สำหรับ Loading เอาไว้เรียกใช้
  const [isLoading, setIsLoading] = useState(true)

  // สร้าง func fetchTodo เพื่อ get ข้อมูลทั้งหมด ไป set ใน const todos
  async function fetchTodo() {
    try {
      //get data && set Todos
      const res = await axios.get(`${BASE_URL}/todos`)
      setTodos(res.data)
      //set Loading ให้ไม่ทำงาน ตอนเราเรียกข้อมูลมาเฉยๆ
      setIsLoading(false)
      //console.log(res.data)
    } catch (error) {
      console.log('error', error)
    }
  }

  // สร้าง func deleteTodo เพื่อลบข้อมูลจาก id
  async function deleteTodo(id) {
    try {
      //set Loading ให้ทำงาน เมื่อเรา delete
      setIsLoading(true)
      // delete data where id
      await axios.delete(`${BASE_URL}/todos/${id}`)
      // หลังจาก delete แล้ว ให้เรียกข้อมูลมาแสดงใหม่
      await fetchTodo()
      //set Loading ให้ไม่ทำงาน 
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  async function addTodo(todoText) {
    const bodyData = {
      name: todoText
    }
    try {
      await axios.post(`${BASE_URL}/todos/`, bodyData)

      setIsLoading(true)
      await fetchTodo()
      console.log(bodyData)
    } catch (error) {
      console.log('error', error)
    }
  }

  // useEffect func fetchTodo() แค่ครั้งเดียวโดยใส่ ,[] ต่อท้าย
  useEffect(() => {
    fetchTodo()
  }, [])

  function todoTextChange(event) {
    // setTodo และรับ params ชื่อ previousState เพื่อเช็คว่า ก่อนหน้านี้มีค่าเป็นอะไร
    todoText = event.target.value
  }


  return (
    <>
      {/* set แสดง Loading */}
      {isLoading && <div>Loading...</div>}
      {/* set ไม่แสดง Loading เมื่อเรียกข้อมูลมาแล้ว */}
      {!isLoading &&
        <div>
          <div>Add Employees</div>
          <input name='addname' type='text' value={todoText} onChange={todoTextChange} ></input>
          <button onClick={async () => {
            await addTodo(todoText)
          }}>Add</button>
          {
            // map ข้อมูล ของ todos มาแสดง
            todos.map((todo, index) => (
              <div key={index}>
                {i++}. {" "}
                {/* {todo.id}  */}
                {todo.name}
                <img src={todo.avatar} alt="avatar"></img>

                {/* ---- btn EDIT ---- */}
                {/* สร้าง Link ให้ btn เพื่อไปหน้า edit พร้อมกับส่ง id ของ todo ไป */}
                {/* **ท่า ` ` ใช้ $ เพื่อต่อ string กับ js** */}
                <Link to={`/edit/${todo.id}`} >
                  <button>Edit</button>
                </Link>

                {/* ---- btn DELETE ---- */}
                <button
                  onClick={async () => {
                    await deleteTodo(todo.id)
                  }}
                >Delete</button>

              </div>

            ))
          }
        </div>
      }
    </>
  )
}

export default App
