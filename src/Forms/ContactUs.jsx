import './Login.css';

function ContactUs(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Send Your Query</h2>
<p className="text-center text-muted mb-4">Tell us about your business and our team will reply with a custom AI automation plan within 24 hours.</p>

{/* Name & Email */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="fullName" placeholder="Full Name"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
</div>

{/* Phone & Website */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
    <input type="tel" className="form-control" id="phone" placeholder="Phone / WhatsApp"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="website" className="form-label">Your website</label>
    <input type="url" className="form-control" id="website" placeholder="https://www.example.com"/>
  </div>
</div>

 {/* Services dropdown */}
<div className="mb-3">
  <label htmlFor="services" className="form-label">Services</label>
  <select className="form-select" id="services">
    <option value="">Select Your Required Service</option>
    <option value="lead-generation">AI Lead Generation</option>
    <option value="sales-automation">AI Sales Automation</option>
    <option value="customer-support">AI Customer Support Automation</option>
    <option value="marketing-automation">AI Marketing Automation</option>
    <option value="business-process">Business Process Automation</option>
    <option value="local-growth">Local Business Growth Automation</option>
     <option value="other">Other</option>
  </select>
</div>

{/* Query */}
<div className="mb-3">
  <label htmlFor="query" className="form-label">Your Query</label>
  <textarea className="form-control" id="query" rows="4" placeholder="Your Query"></textarea>
</div>

{/* Checkbox */}
 <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="confirmContact"/>
  <label className="form-check-label" htmlFor="confirmContact">I confirm that I want to receive messages using the contact information provided.</label>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Submit Your Query</button>
  </div>
  </div>
</form>
   </> )
}

export default ContactUs;