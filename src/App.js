import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom"
import UserForm from "./components/UserForm";
import Login from "./components/Login"
import UserBox from "./components/UserBox";
import { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";

import { loadStudent, resendStudent, removeStudent, updateStudent } from "./actions/users";

function Layout() {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Apps</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="add">Add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="login">{user ? user.email : 'Guest'}</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => { localStorage.removeItem('user'); window.location = '/' }}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <Outlet />
    </div>
  )
}

function NotFound() {
  return (
    <h1>Halaman Tidak Ditemukan</h1>
  )
}

function App() {
  const students = useSelector((state) => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadStudent())
  }, [dispatch])

  return (
    // Nested Router
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserBox
            students={students}
            removeStudent={removeStudent}
            resendStudent={resendStudent}
            updateStudent={updateStudent} />} />
          <Route path="add" element={<UserForm />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
