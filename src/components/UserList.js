import UserItem from "./UserItem"
export default function UserList({ students, remove, resend }) {
    //state is a local variable inside an function, prop is parameter that comes from outside
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student, index) => (
                        <UserItem key={index} student={student} no={index + 1} remove={() => remove(student._id)} resend={() => resend(student)} />
                    ))
                }
            </tbody>
        </table>
    )
}