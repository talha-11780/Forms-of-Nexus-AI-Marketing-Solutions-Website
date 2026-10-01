import './Login.css';

function CampaignCreation(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Create New Campaign</h2>
<p className="text-center text-muted mb-4">Set up a new marketing campaign for your clients.</p>

{/* Campaign Name */}
<div className="mb-3">
  <label htmlFor="campaignName" className="form-label">Campaign Name</label>
  <input type="text" className="form-control" id="campaignName" placeholder="Campaign Name"/>
</div>

{/* Platform */}
<div className="mb-3">
  <label htmlFor="platform" className="form-label">Platform</label>
  <select className="form-select" id="platform">
    <option value="">Select Platform</option>
    <option value="facebook">Facebook</option>
    <option value="instagram">Instagram</option>
    <option value="google-ads">Google Ads</option>
    <option value="linkedin">LinkedIn</option>
  </select>
</div>

{/* Start Date */}
<div className="mb-3">
  <label htmlFor="startDate" className="form-label">Start Date</label>
  <input type="date" className="form-control" id="startDate"/>
</div>

{/* Budget */}
<div className="mb-3">
  <label htmlFor="budget" className="form-label">Budget</label>
  <input type="number" className="form-control" id="budget" placeholder="Enter budget in USD"/>
</div>

{/* Campaign Goal */}
<div className="mb-3">
  <label htmlFor="goal" className="form-label">Campaign Goal</label>
  <textarea className="form-control" id="goal" rows="4" placeholder="Describe the goal of this campaign..."></textarea>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Create Campaign</button>
  </div>
  </div>
</form>
   </> )
}

export default CampaignCreation;