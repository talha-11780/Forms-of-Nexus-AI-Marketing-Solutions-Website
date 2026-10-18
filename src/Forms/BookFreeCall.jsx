import './Login.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from './FormError';
import { bookFreeCallSchema } from './formValidation';

function BookFreeCall(){
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: zodResolver(bookFreeCallSchema) });

    function submitCallRequest(data) {
      console.log('Free call request submitted.', data);
    }

    return(
        <>
        <form noValidate onSubmit={handleSubmit(submitCallRequest)}>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Book Your Free Strategy Call</h2>
<p className="text-center text-muted mb-4">Pick a time that works for you and our team will reach out to confirm.</p>

{/* Full Name */}
<div className="mb-3">
  <label htmlFor="fullName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="fullName" placeholder="Full Name" {...register('fullName')}/>
  <FormError error={errors.fullName}/>
</div>

{/* Email */}
<div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email" placeholder="Email" {...register('email')}/>
  <FormError error={errors.email}/>
</div>

{/* Phone */}
<div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
  <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp" {...register('phone')}/>
  <FormError error={errors.phone}/>
</div>

{/* Preferred Date */}
<div className="mb-3">
  <label htmlFor="preferredDate" className="form-label">Preferred Date</label>
  <input type="date" className="form-control" id="preferredDate" {...register('preferredDate')}/>
  <FormError error={errors.preferredDate}/>
</div>

{/* Preferred Time */}
<div className="mb-3">
  <label htmlFor="preferredTime" className="form-label">Preferred Time</label>
  <input type="time" className="form-control" id="preferredTime" {...register('preferredTime')}/>
  <FormError error={errors.preferredTime}/>
</div>

{/* Message */}
<div className="mb-3">
  <label htmlFor="message" className="form-label">What do you need help with?</label>
  <textarea className="form-control" id="message" rows="3" placeholder="Briefly describe your business needs..." {...register('message')}></textarea>
  <FormError error={errors.message}/>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Book Free Call</button>
  </div>
  </div>
</form>
   </> )
}

export default BookFreeCall;