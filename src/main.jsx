// Router DOM จัดการผ่านหน้า Main
import React from 'react'
import ReactDOM from 'react-dom/client'

// import หน้าต่างๆมาด้วย
import App from './App.jsx'
import Edit from './Edit.jsx'

// import ตาม Doc
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//สร้าง const ตาม Doc
const router = createBrowserRouter([
  {
    // กำหนด path หน้า App
    path: "/",
    // เปลี่ยน element เป็น <App />
    element: <App />,
  },
  {
    // กำหนด path และ params ของหน้า Edit 
    path: "/edit/:id",
    // เปลี่ยน element เป็น <Edit /> 
    element: <Edit />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ใส่คำสั่งนี้ ตาม Doc */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
