export default function UserForm() {
    return (
            <form>
                <div className="row mb-3">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
    )
}