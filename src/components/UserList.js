import UserItem from "./UserItem"
export default function UserList() {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <UserItem/>
            </tbody>
        </table>
    )
}