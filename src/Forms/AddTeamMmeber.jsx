import './Login.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './FormError';
import { addTeamMemberSchema } from './formValidation';

function AddTeamMember(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(addTeamMemberSchema) });

    function submitTeamMember(data) {
      console.log('Team member submitted.', data);
    }

    return(
        <>
        <form noValidate onSubmit={handleSubmit(submitTeamMember)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Add New Team Member</h2>
<p className="text-center text-muted mb-4">Invite a new member and assign their access level.</p>

{/* Full Name */}
<div className="mb-3">
  <label htmlFor="memberName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="memberName" placeholder="Full Name" {...register('memberName')}/>
  <FormError error={errors.memberName}/>
</div>

{/* Email */}
<div className="mb-3">
  <label htmlFor="memberEmail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="memberEmail" placeholder="Email" {...register('memberEmail')}/>
  <FormError error={errors.memberEmail}/>
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
  <FormError error={errors.role}/>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Add Team Member</button>
  </div>
  </div>
</form>
   </> )
}

export default AddTeamMember;