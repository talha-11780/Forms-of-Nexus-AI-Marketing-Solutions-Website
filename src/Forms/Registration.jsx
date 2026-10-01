import './Login.css';

function Registration(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Get Your Free AI Growth Plan</h2>
<p className="text-center text-muted mb-4">Takes 60 seconds. We’ll analyze your business and send you a personalized AI automation roadmap within 24 hours.</p>

{/* Name */}
<div className="mb-3">
  <label htmlFor="fullName" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="fullName" placeholder="Full Name"/>
</div>

{/* Email */}
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>

{/* Phone */}
<div className="mb-3">
  <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
  <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp"/>
</div>

 {/* Industry dropdown */}
 <div className="mb-3">
  <label htmlFor="industry" className="form-label">Services</label>
  <select className="form-select" id="industry">
    <option value="">Select your industry</option>
    <option value="ecommerce">E-commerce</option>
    <option value="real-estate">Real Estate</option>
    <option value="consulting">Consulting</option>
    <option value="clinic">Clinics</option>
    <option value="other">Other</option>
  </select>
</div>

{/* Pass */}
<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>

{/* Confirm Password */}
<div className="mb-3">
  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
  <input type="password" className="form-control" id="confirmPassword"/>
</div>

{/* Checkbox */}
  <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Submit</button>
  </div>
  </div>
</form>
   </> )
}

export default Registration;