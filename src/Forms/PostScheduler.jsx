import './Login.css';

function PostScheduler(){
    return(
        <>
        <form>
            
            <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
 <div className="card p-4 login-card" style={{maxWidth: "420px", width: "100%"}}>

{/* Heading */}
    <h2 className="text-center mb-2">Schedule Social Media Post</h2>
<p className="text-center text-muted mb-4">Plan and queue your post for the right platform and time.</p>

{/* Post Caption */}
<div className="mb-3">
  <label htmlFor="caption" className="form-label">Post Caption</label>
  <textarea className="form-control" id="caption" rows="4" placeholder="Write your post caption..."></textarea>
</div>

{/* Platform */}
<div className="mb-3">
  <label htmlFor="platform" className="form-label">Platform</label>
  <select className="form-select" id="platform">
    <option value="">Select Platform</option>
    <option value="facebook">Facebook</option>
    <option value="instagram">Instagram</option>
    <option value="linkedin">LinkedIn</option>
    <option value="twitter">Twitter</option>
  </select>
</div>

{/* Date & Time */}
<div className="mb-3">
  <label htmlFor="postDate" className="form-label">Date & Time to Post</label>
  <input type="datetime-local" className="form-control" id="postDate"/>
</div>

{/* Queue checkbox */}
<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="addToQueue"/>
  <label className="form-check-label" htmlFor="addToQueue">Add to queue</label>
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Schedule Post</button>
  </div>
  </div>
</form>
   </> )
}

export default PostScheduler;