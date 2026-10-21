import './Login.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
  exampleInputEmail1: z.email('Enter a valid email address'),
  phone: z.string().min(1, 'Phone / WhatsApp is required'),
  website: z.url('Enter a valid website URL'),
  services: z.string().min(1, 'Please select a service'),
  query: z.string().min(1, 'Your Query is required'),
  confirmContact: z.boolean().refine((value) => value, 'Please confirm that we may contact you'),
});

function ContactUs(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contactSchema),
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
    <h2 className="text-center mb-2">Send Your Query</h2>
<p className="text-center text-muted mb-4">Tell us about your business and our team will reply with a custom AI automation plan within 24 hours.</p>

{/* Name & Email */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="fullName" placeholder="Full Name" {...register('fullName')}/>
    {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('exampleInputEmail1')}/>
    {errors.exampleInputEmail1 && <span className="text-danger">{errors.exampleInputEmail1.message}</span>}
  </div>
</div>

{/* Phone & Website */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
    <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp" {...register('phone')}/>
    {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="website" className="form-label">Your website</label>
    <input type="url" className="form-control" id="website" placeholder="https://www.example.com" {...register('website')}/>
    {errors.website && <span className="text-danger">{errors.website.message}</span>}
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
  {errors.services && <span className="text-danger">{errors.services.message}</span>}
</div>

{/* Query */}
<div className="mb-3">
  <label htmlFor="query" className="form-label">Your Query</label>
  <textarea className="form-control" id="query" rows="4" placeholder="Your Query" {...register('query')}></textarea>
  {errors.query && <span className="text-danger">{errors.query.message}</span>}
</div>

{/* Checkbox */}
 <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="confirmContact" {...register('confirmContact')}/>
  <label className="form-check-label" htmlFor="confirmContact">I confirm that I want to receive messages using the contact information provided.</label>
   {errors.confirmContact && <span className="text-danger d-block">{errors.confirmContact.message}</span>}
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Submit Your Query</button>
  </div>
  </div>
</form>
   </> )
}

export default ContactUs;