import './Login.css';

function AddService(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Add New Service</h2>
<p className="text-center text-muted mb-4">Add a new service to display on the website.</p>

{/* Service Name */}
<div className="mb-3">
  <label htmlFor="serviceName" className="form-label">Service Name</label>
  <input type="text" className="form-control" id="serviceName" placeholder="e.g. AI Lead Generation"/>
</div>

{/* Category */}
<div className="mb-3">
  <label htmlFor="category" className="form-label">Category</label>
  <select className="form-select" id="category">
    <option value="">Select Category</option>
    <option value="lead-generation">Lead Generation</option>
    <option value="sales-automation">Sales Automation</option>
    <option value="marketing-automation">Marketing Automation</option>
    <option value="customer-support">Customer Support</option>
  </select>
</div>

{/* Description */}
<div className="mb-3">
  <label htmlFor="serviceDescription" className="form-label">Service Description</label>
  <textarea className="form-control" id="serviceDescription" rows="4" placeholder="Describe what this service offers..."></textarea>
</div>

{/* Price */}
<div className="mb-3">
  <label htmlFor="price" className="form-label">Starting Price</label>
  <input type="number" className="form-control" id="price" placeholder="Enter price in USD"/>
</div>

{/* Active checkbox */}
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="isActive"/>
  <label className="form-check-label" htmlFor="isActive">Make this service active on the website</label>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Add Service</button>
  </div>
  </div>
</form>
   </> )
}

export default AddService;