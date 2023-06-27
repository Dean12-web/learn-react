import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UserForm({ add }) {
    const navigate = useNavigate()

    const [student, setStudent] = useState({ email: '', password: '' })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(!(user && user.token)){
            navigate('/login')
        }
    }, [navigate])

    const submit = (event) => {
        event.preventDefault()
        add(student.email, student.password)
        setStudent({ email: '', password: '' })
        navigate('/')
    }
    return (
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
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
}