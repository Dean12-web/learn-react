import UserForm from "./UserForm"
import UserList from "./UserList"
export default function UserBox() {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="text-center">Daftar Siswa</h1>
            </div>
            <div className="card-body">
                <UserForm />
            </div>
            <UserList />
            <div className="card-footer">
                <h1 className="text-center">Ini Footer</h1>
            </div>
        </div>
    )
}