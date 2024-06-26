// ต้อง import useParams
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// เก็บ URL_Base เป็น const
const BASE_URL = 'https://6630e534c92f351c03db7ae3.mockapi.io'

// สร้าง func Edit
function Edit() {
    // สร้าง const รับ id
    const { id } = useParams()

    const [isLoading, setIsLoading] = useState(true)

    //react hook ต้องประกาศ const ภายใน func หลักเท่านั้น
    const navigate = useNavigate()

    // สร้าง useState สำหรับเก็บข้อมูล หลังจาก get มา
    const [todo, setTodo] = useState({

        // obj ที่เรา get มามี3ตัว แต่เราต้องการ edit แค่ตัว name เลยต้อง set state default ให้ตัว name เป็นค่าว่างก่อน เพื่อไม่ให้ input เกิดการ undefined
        name: '',
        avatar: ''
    })

    // สร้าง func fetchTodo เพื่อ get ข้อมูล (เฉพาะ id) ไป set ใน const todos
    async function fetchTodo(editId) {
        try {
            //get data where id && set Todo
            const res = await axios.get(`${BASE_URL}/todos/${editId}`)
            setTodo(res.data)

            setIsLoading(false)
        } catch (error) {
            console.log('error', error)
        }
    }
    // ใช้ useEffect func fetchTodo และกำหนด id ที่รับมาจาก Params
    useEffect(() => {
        fetchTodo(id)
    }, [id])

    //สร้าง func handleNameChange / event = ตัวแปรรับค่าสิ่งที่เกิดขึ้น
    function handleNameChange(event) {
        // setTodo และรับ params ชื่อ previousState เพื่อเช็คว่า ก่อนหน้านี้มีค่าเป็นอะไร
        setTodo((previousState) => ({
            // ... เพื่อทำการกระจายทุกค่าออกมา
            ...previousState,
            // เปลี่ยนค่าใหม่ให้กับ name จาก event.target.value
            name: event.target.value
        }))
    }

    function handleAvatarChange(event) {
        // setTodo และรับ params ชื่อ previousState เพื่อเช็คว่า ก่อนหน้านี้มีค่าเป็นอะไร
        setTodo((previousState) => ({
            // ... เพื่อทำการกระจายทุกค่าออกมา
            ...previousState,
            // เปลี่ยนค่าใหม่ให้กับ name จาก event.target.value
            avatar: event.target.value
        }))
    }

    //สร้าง func updateName
    async function updateName() {
        try {
            // put data where id และใส่ name ค่าใหม่
            await axios.put(`${BASE_URL}/todos/${id}`, { name: todo.name })
            await axios.put(`${BASE_URL}/todos/${id}`, { avatar: todo.avatar })
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
            // กลับไปที่หน้าหลัก
            navigate('/')
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {!isLoading &&
                <div>
                    <div>Edit Employees</div>

                    {/* input ดึงค่ามาแสดง และกำหนด func onChange */}
                    <input name="editName" type='text' value={todo.name} onChange={handleNameChange}></input>

                    <input name="editAvatar" type='text' value={todo.avatar} onChange={handleAvatarChange}></input>

                    {/* เช็คว่าค่าเปลี่ยนจริงไหม */}
                    {/* <div>{todo.name}</div> */}

                </div>
            }
            {/* ปุ่ม onClick updateName */}
            <button onClick={updateName}> Ok </button>

            {/* ปุ่มกลับหน้าแรก */}
            <Link to={`/`} ><button> Back </button></Link>
        </>
    )
}

export default Edit