import './Login.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './FormError';
import { contactUsSchema } from './formValidation';

function ContactUs(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(contactUsSchema) });

    function submitContactQuery(data) {
      console.log('Contact query submitted.', data);
    }

    return(
        <>
        <form noValidate onSubmit={handleSubmit(submitContactQuery)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Send Your Query</h2>
<p className="text-center text-muted mb-4">Tell us about your business and our team will reply with a custom AI automation plan within 24 hours.</p>

{/* Name & Email */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="fullName" placeholder="Full Name" {...register('fullName')}/>
    <FormError error={errors.fullName}/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')}/>
    <FormError error={errors.email}/>
  </div>
</div>

{/* Phone & Website */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
    <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp" {...register('phone')}/>
    <FormError error={errors.phone}/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="website" className="form-label">Your website</label>
    <input type="url" className="form-control" id="website" placeholder="https://www.example.com" {...register('website')}/>
    <FormError error={errors.website}/>
  </div>
</div>

 {/* Services dropdown */}
<div className="mb-3">
  <label htmlFor="services" className="form-label">Services</label>
  <select className="form-select" id="services" {...register('services')}>
    <option value="">Select Your Required Service</option>
    <option value="lead-generation">AI Lead Generation</option>
    <option value="sales-automation">AI Sales Automation</option>
    <option value="customer-support">AI Customer Support Automation</option>
    <option value="marketing-automation">AI Marketing Automation</option>
    <option value="business-process">Business Process Automation</option>
    <option value="local-growth">Local Business Growth Automation</option>
     <option value="other">Other</option>
  </select>
  <FormError error={errors.services}/>
</div>

{/* Query */}
<div className="mb-3">
  <label htmlFor="query" className="form-label">Your Query</label>
  <textarea className="form-control" id="query" rows="4" placeholder="Your Query" {...register('query')}></textarea>
  <FormError error={errors.query}/>
</div>

{/* Checkbox */}
 <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="confirmContact" {...register('confirmContact')}/>
  <label className="form-check-label" htmlFor="confirmContact">I confirm that I want to receive messages using the contact information provided.</label>
  <FormError error={errors.confirmContact}/>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Submit Your Query</button>
  </div>
  </div>
</form>
   </> )
}

export default ContactUs;