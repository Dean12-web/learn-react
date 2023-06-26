export default function UserItem({ no, student, remove, resend }) {
    return (
        <tr>
            <td>{no}</td>
            <td>{student.email}</td>
            {student.sent ? (
                <td>
                    <button className="btn btn-success" type="button">Edit</button>&nbsp;
                    <button className="btn btn-danger" type="button" onClick={remove}>Delete</button>
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