import './Login.css';

function AddTeamMember(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Add New Team Member</h2>
<p className="text-center text-muted mb-4">Invite a new member and assign their access level.</p>

{/* Full Name */}
<div className="mb-3">
  <label htmlFor="memberName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="memberName" placeholder="Full Name"/>
</div>

{/* Email */}
<div className="mb-3">
  <label htmlFor="memberEmail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="memberEmail" placeholder="Email"/>
</div>

{/* Role */}
<div className="mb-3">
  <label htmlFor="role" className="form-label">Role</label>
  <select className="form-select" id="role">
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
    <option value="viewer">Viewer</option>
  </select>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Add Team Member</button>
  </div>
  </div>
</form>
   </> )
}

export default AddTeamMember;