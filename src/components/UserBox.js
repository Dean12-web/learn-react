import UserForm from "./UserForm"
import UserList from "./UserList"
import { useEffect, useState } from 'react';
import axios from 'axios'


export default function UserBox() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/users`).then((response) => {
            if (response.data.success)
                setData(response.data.data.map(item => ({ ...item, sent: true })))
        }).catch(()=>{
            setData([])
        })
    }, [])

    const addStudent = (email, password) => {
        const _id = Date.now().toString() //Temporary ID, For Safety U can Use UUID
        setData([{ _id, email, password, sent: true }, ...data])
        axios.post(`http://localhost:3001/users`, { email, password }).then((response) => {
            setData(currentData => currentData.map(item => {
                if (item._id === _id) {
                    item._id = response.data.data._id
                }
                return item
            }))
        }).catch(() => {
            setData(currentData => currentData.map(item => {
                if (item._id === _id) {
                    item.sent = false
                }
                return item
            }))
        })
    }

    const resendStudent = ({ _id, email, password }) => {
        axios.post(`http://localhost:3001/users`, { email, password }).then((response) => {
            setData(currentData => currentData.map(item => {
                if (item._id === _id) {
                    item._id = response.data.data._id
                    item.sent = true
                }
                return item
            }))
        }).catch(()=>{

        })
    }

    const removeStudent = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`).then((response) => {
            setData(data.filter(item => item._id !== id))
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="text-center">Daftar Siswa</h1>
            </div>
            <div className="card-body">
                <UserForm add={addStudent} />
            </div>
            <UserList students={data} remove={removeStudent} resend ={resendStudent}/>
            <div className="card-footer">
                <h1 className="text-center">Ini Footer</h1>
            </div>
        </div>
    )
}