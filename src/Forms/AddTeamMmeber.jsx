import './Login.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const teamMemberSchema = z.object({
  memberName: z.string().min(2, 'Full Name must be at least 2 characters'),
  memberEmail: z.email('Enter a valid email address'),
  role: z.string().min(1, 'Role is required'),
});

function AddTeamMember(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(teamMemberSchema),
    });

    function myFormSubmissionFunction(data) {
        console.log('Form submitted.', data);
    }

    return(
        <>
        <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Add New Team Member</h2>
<p className="text-center text-muted mb-4">Invite a new member and assign their access level.</p>

{/* Full Name */}
<div className="mb-3">
  <label htmlFor="memberName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="memberName" placeholder="Full Name" {...register('memberName')}/>
  {errors.memberName && <span className="text-danger">{errors.memberName.message}</span>}
</div>

{/* Email */}
<div className="mb-3">
  <label htmlFor="memberEmail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="memberEmail" placeholder="Email" {...register('memberEmail')}/>
  {errors.memberEmail && <span className="text-danger">{errors.memberEmail.message}</span>}
</div>

{/* Role */}
<div className="mb-3">
  <label htmlFor="role" className="form-label">Role</label>
  <select className="form-select" id="role" {...register('role')}>
    <option value="">Select Role</option>
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
    <option value="viewer">Viewer</option>
  </select>
  {errors.role && <span className="text-danger">{errors.role.message}</span>}
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Add Team Member</button>
  </div>
  </div>
</form>
   </> )
}

export default AddTeamMember;