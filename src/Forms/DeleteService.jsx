import './Login.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './FormError';
import { deleteServiceSchema } from './formValidation';

function DeleteService(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(deleteServiceSchema) });

    function submitServiceDeletion(data) {
      console.log('Service deletion submitted.', data);
    }

    return(
        <>
        <form noValidate onSubmit={handleSubmit(submitServiceDeletion)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Delete Service</h2>
<p className="text-center text-muted mb-4">Remove a service that is no longer offered on the website.</p>

{/* Select Service */}
<div className="mb-3">
  <label htmlFor="serviceSelect" className="form-label">Select Service</label>
  <select className="form-select" id="serviceSelect" {...register('serviceSelect')}>
    <option value="">Select Service to Delete</option>
    <option value="lead-generation">AI Lead Generation</option>
    <option value="sales-automation">AI Sales Automation</option>
    <option value="marketing-automation">AI Marketing Automation</option>
    <option value="customer-support">Customer Support Automation</option>
  </select>
  <FormError error={errors.serviceSelect}/>
</div>

{/* Confirm checkbox */}
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="confirmDelete" {...register('confirmDelete')}/>
  <label className="form-check-label" htmlFor="confirmDelete">I confirm I want to permanently delete this service.</label>
  <FormError error={errors.confirmDelete}/>
</div>

{/* Button */}
<button type="submit" className="btn btn-danger w-100">Delete Service</button>
  </div>
  </div>
</form>
   </> )
}

export default DeleteService;