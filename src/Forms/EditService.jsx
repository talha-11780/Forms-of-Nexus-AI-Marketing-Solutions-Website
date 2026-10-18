import './Login.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './FormError';
import { editServiceSchema } from './formValidation';

function EditService(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(editServiceSchema) });

    function submitServiceChanges(data) {
      console.log('Service changes submitted.', data);
    }

    return(
        <>
        <form noValidate onSubmit={handleSubmit(submitServiceChanges)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Edit Service</h2>
<p className="text-center text-muted mb-4">Update the details of an existing service.</p>

{/* Select Service */}
<div className="mb-3">
  <label htmlFor="serviceSelect" className="form-label">Select Service</label>
  <select className="form-select" id="serviceSelect" {...register('serviceSelect')}>
    <option value="">Select Service to Edit</option>
    <option value="lead-generation">AI Lead Generation</option>
    <option value="sales-automation">AI Sales Automation</option>
    <option value="marketing-automation">AI Marketing Automation</option>
    <option value="customer-support">Customer Support Automation</option>
  </select>
  <FormError error={errors.serviceSelect}/>
</div>

{/* Service Name */}
<div className="mb-3">
  <label htmlFor="serviceName" className="form-label">Service Name</label>
  <input type="text" className="form-control" id="serviceName" placeholder="Update service name" {...register('serviceName')}/>
  <FormError error={errors.serviceName}/>
</div>

{/* Description */}
<div className="mb-3">
  <label htmlFor="serviceDescription" className="form-label">Service Description</label>
  <textarea className="form-control" id="serviceDescription" rows="4" placeholder="Update description..." {...register('serviceDescription')}></textarea>
  <FormError error={errors.serviceDescription}/>
</div>

{/* Price */}
<div className="mb-3">
  <label htmlFor="price" className="form-label">Starting Price</label>
  <input type="number" className="form-control" id="price" placeholder="Update price in USD" {...register('price')}/>
  <FormError error={errors.price}/>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Save Changes</button>
  </div>
  </div>
</form>
   </> )
}

export default EditService;