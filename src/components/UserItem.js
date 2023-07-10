import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeStudent } from "../actions/users"

export default function UserItem({ no, student, resend, update }) {
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)

    const [email, setEmail] = useState(student.email)

    return (
        <tr>
            <td>{no}</td>
            <td>{isEdit ?
                (
                    <input type="email" className="form-control" value={email} onChange={event=> setEmail(event.target.value)} />
                ) : student.email
            }</td>
            {student.sent ? isEdit ? (
                <td>
                    <button className="btn btn-secondary" type="button" onClick={()=> {update(student._id, email);setIsEdit(false)}}>Save</button>&nbsp;
                    <button className="btn btn-warning" type="button" onClick={() => {setIsEdit(false); setEmail(student.email)}}>Cancel</button>&nbsp;
                </td>
            ) : (
                <td>
                    <button className="btn btn-success" type="button" onClick={() => setIsEdit(true)}>Edit</button>&nbsp;
                    <button className="btn btn-danger" type="button" onClick={() => dispatch(removeStudent(student._id))}>Delete</button>
                </td>
            ) : (
                <td>
                    <button className="btn btn-warning" type="button" onClick={resend}>resend</button>&nbsp;
                </td>
            )
            }
        </tr>
    )
}