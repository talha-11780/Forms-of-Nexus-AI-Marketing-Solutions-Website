import './Login.css';

function DeleteService(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Delete Service</h2>
<p className="text-center text-muted mb-4">Remove a service that is no longer offered on the website.</p>

{/* Select Service */}
<div className="mb-3">
  <label htmlFor="serviceSelect" className="form-label">Select Service</label>
  <select className="form-select" id="serviceSelect">
    <option value="">Select Service to Delete</option>
    <option value="lead-generation">AI Lead Generation</option>
    <option value="sales-automation">AI Sales Automation</option>
    <option value="marketing-automation">AI Marketing Automation</option>
    <option value="customer-support">Customer Support Automation</option>
  </select>
</div>

{/* Confirm checkbox */}
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="confirmDelete"/>
  <label className="form-check-label" htmlFor="confirmDelete">I confirm I want to permanently delete this service.</label>
</div>

{/* Button */}
<button type="submit" className="btn btn-danger w-100">Delete Service</button>
  </div>
  </div>
</form>
   </> )
}

export default DeleteService;