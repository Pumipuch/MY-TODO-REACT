// import { useState, useEffect } from 'react'
// // axios ต้อง Import มาใช้เสมอ
// import axios from 'axios'

// import { Link } from 'react-router-dom'

// // เก็บ URL_Base เป็น const
// const BASE_URL = 'https://6630e534c92f351c03db7ae3.mockapi.io'

// function App() {
//   // สร้าง useState สำหรับเก็บข้อมูล หลังจาก get มา
//   const [todos, setTodos] = useState([])

//   let i = 1

//   let todoText

//   // สร้าง const สำหรับ Loading เอาไว้เรียกใช้
//   const [isLoading, setIsLoading] = useState(true)

//   // สร้าง func fetchTodo เพื่อ get ข้อมูลทั้งหมด ไป set ใน const todos
//   async function fetchTodo() {
//     try {
//       //get data && set Todos
//       const res = await axios.get(`${BASE_URL}/todos`)
//       setTodos(res.data)
//       //set Loading ให้ไม่ทำงาน ตอนเราเรียกข้อมูลมาเฉยๆ
//       setIsLoading(false)
//       //console.log(res.data)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   // สร้าง func deleteTodo เพื่อลบข้อมูลจาก id
//   async function deleteTodo(id) {
//     try {
//       //set Loading ให้ทำงาน เมื่อเรา delete
//       setIsLoading(true)
//       // delete data where id
//       await axios.delete(`${BASE_URL}/todos/${id}`)
//       // หลังจาก delete แล้ว ให้เรียกข้อมูลมาแสดงใหม่
//       await fetchTodo()
//       //set Loading ให้ไม่ทำงาน 
//       setIsLoading(false)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   async function addTodo(todoText) {
//     const bodyData = {
//       name: todoText
//     }
//     try {
//       await axios.post(`${BASE_URL}/todos/`, bodyData)

//       setIsLoading(true)
//       await fetchTodo()
//       console.log(bodyData)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   // useEffect func fetchTodo() แค่ครั้งเดียวโดยใส่ ,[] ต่อท้าย
//   useEffect(() => {
//     fetchTodo()
//   }, [])

//   function todoTextChange(event) {
//     // setTodo และรับ params ชื่อ previousState เพื่อเช็คว่า ก่อนหน้านี้มีค่าเป็นอะไร
//     todoText = event.target.value
//   }


//   return (
//     <>
//       {/* set แสดง Loading */}
//       {isLoading && <div>Loading...</div>}
//       {/* set ไม่แสดง Loading เมื่อเรียกข้อมูลมาแล้ว */}
//       {!isLoading &&
//         <div className='container mx-auto px-20'>

//           <div><p className="text-3xl font-bold text-blue-600 text-center m-4">
//             Add Employees
//           </p></div>

//           <div>

//           <div className="flex flex-col w-full lg:flex-row">

//           <div className="grid flex-grow place-items-center">
//                 <label className="input input-bordered flex items-center gap-2 w-full">Name
//                   <input name='addname' type='text' value={todoText} onChange={todoTextChange} className="grow" placeholder="...."></input></label>
//               </div>

//               <div className="grid flex-grow place-items-center m-4">
//               <button className="btn btn-success" onClick={async () => {
//                 await addTodo(todoText)
//               }}>Add</button>
//             </div>

//           </div>

//           {
//             // map ข้อมูล ของ todos มาแสดง
//             todos.map((todo, index) => (
//               <div key={index}>
//                 {i++}. {" "}
//                 {/* {todo.id}  */}
//                 {todo.name}

//                 <img src={todo.avatar} alt="avatar" className='w-24 h-24'></img>

//                 {/* ---- btn EDIT ---- */}
//                 {/* สร้าง Link ให้ btn เพื่อไปหน้า edit พร้อมกับส่ง id ของ todo ไป */}
//                 {/* **ท่า ` ` ใช้ $ เพื่อต่อ string กับ js** */}
//                 <Link to={`/edit/${todo.id}`} >
//                   <button>Edit</button>
//                 </Link>

//                 {/* ---- btn DELETE ---- */}
//                 <button
//                   onClick={async () => {
//                     await deleteTodo(todo.id)
//                   }}
//                 >Delete</button>

//               </div>

//             ))
//           }

//         </div>

//         </div >
//       }
//     </>
//   )
// }

// export default App


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
        <div className='max-w-3xl mx-auto my-2'>

          {/* ----- HEADER ------ */}

          <div><p className="text-3xl font-bold text-blue-600 text-center m-4">
            Add Employees
          </p></div>

          {/* ------- INPUT && BTN ------ */}

          <div className="flex flex-col w-full lg:flex-row">

            <div className="grid flex-grow place-items-center">
              <label className="input input-bordered flex items-center w-full">Name :
                <input name='addname' type='text' value={todoText} onChange={todoTextChange} className="grow ml-2"></input></label>
            </div>

            <div className="grid flex m-4">
              <button className="btn btn-success" onClick={async () => {
                await addTodo(todoText)
              }}>Add</button>
            </div>

          </div>

          {/* --------- TABLE DATA -------- */}

          <div className='max-w-xl mx-auto my-2'>

            {
              // map ข้อมูล ของ todos มาแสดง
              todos.map((todo, index) => (
                <div id='1' key={index} className="">

                  <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='grid justify-items-center md:justify-items-start text-xl'>
                      {i++}. {" "}
                      {/* {todo.id}  */}
                      {todo.name}

                      <img src={todo.avatar} alt="avatar" className='w-24 m-2'></img>
                    </div>

                    {/* ---- btn EDIT ---- */}
                    {/* สร้าง Link ให้ btn เพื่อไปหน้า edit พร้อมกับส่ง id ของ todo ไป */}
                    {/* **ท่า ` ` ใช้ $ เพื่อต่อ string กับ js** */}

                    <div className='grid justify-items-center md:justify-items-end'>
                      <button><Link to={`/edit/${todo.id}`} >
                        <img src="https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png" className='w-8' />
                      </Link></button>

                      {/* ---- btn DELETE ---- */}
                      <button
                        onClick={async () => {
                          await deleteTodo(todo.id)
                        }}
                      ><img src="https://cdn.iconscout.com/icon/free/png-256/free-delete-736-470378.png" className='w-8' /></button>
                    </div>

                  </div>

                  <div className="divider divider-accent"></div>

                </div>

              ))
            }
          </div >
        </div >
      }
    </>
  )
}

export default App
