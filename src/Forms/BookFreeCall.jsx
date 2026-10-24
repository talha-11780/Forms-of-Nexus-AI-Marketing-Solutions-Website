import './Login.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const callSchema = z.object({
  fullName: z.string().min(6, 'Full Name must be at least 6 characters'),
  email: z.email('Enter a valid email address'),
  phone: z.string().min(11, 'Phone / WhatsApp must be at least 11 characters'),

preferredDate: z.coerce.date({
  message: 'Preferred Date is required',
}),
preferredTime: z.string().min(1, 'Preferred Time is required'),

  message: z.string().min(1, 'Please describe what you need help with'),
});

function BookFreeCall(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(callSchema),
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
    <h2 className="text-center mb-2">Book Your Free Strategy Call</h2>
<p className="text-center text-muted mb-4">Pick a time that works for you and our team will reach out to confirm.</p>

{/* Full Name */}
<div className="mb-3">
  <label htmlFor="fullName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="fullName" placeholder="Full Name" {...register('fullName')}/>
  {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
</div>

{/* Email */}
<div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" placeholder="Email" {...register('email')}/>
  {errors.email && <span className="text-danger">{errors.email.message}</span>}
</div>

{/* Phone */}
<div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
  <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp" {...register('phone')}/>
  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
</div>

{/* Preferred Date */}
<div className="mb-3">
  <label htmlFor="preferredDate" className="form-label">Preferred Date</label>
  <input type="date" className="form-control" id="preferredDate" {...register('preferredDate')}/>
  {errors.preferredDate && <span className="text-danger">{errors.preferredDate.message}</span>}
</div>

{/* Preferred Time */}
<div className="mb-3">
  <label htmlFor="preferredTime" className="form-label">Preferred Time</label>
  <input type="time" className="form-control" id="preferredTime" {...register('preferredTime')}/>
  {errors.preferredTime && <span className="text-danger">{errors.preferredTime.message}</span>}
</div>

{/* Message */}
<div className="mb-3">
  <label htmlFor="message" className="form-label">What do you need help with?</label>
  <textarea className="form-control" id="message" rows="3" placeholder="Briefly describe your business needs..." {...register('message')}></textarea>
  {errors.message && <span className="text-danger">{errors.message.message}</span>}
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Book Free Call</button>
  </div>
  </div>
</form>
   </> )
}

export default BookFreeCall;