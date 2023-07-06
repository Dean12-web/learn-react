import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {
    const [student, setStudent] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const auth = ({ email, password }) => {
        axios.post(`http://localhost:3001/users/auth`, { email, password }).then(({ data }) => {
            if (data.success) {
                localStorage.setItem("user", JSON.stringify(data.data))
                navigate('/')
            } else {
                alert(data.data)
            }
        }).catch(() => {
            alert('Errort Connecting To The Server')
        })
    }
    const submit = (event) => {
        event.preventDefault()
        auth(student)
        setStudent({ email: '', password: '' })
    }
    return (
        <div className="card">
            <div className="card-header text-center">
                <h1>Login</h1>
            </div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" name="email" value={student.email} onChange={event => setStudent({ ...student, email: event.target.value })} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" name="password" value={student.password} onChange={event => setStudent({ ...student, password: event.target.value })} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}