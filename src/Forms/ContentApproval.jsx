import './Login.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const contentApprovalSchema = z.object({
  contentTitle: z.string().min(1, 'Content Title is required'),
  contentType: z.string().min(1, 'Content Type is required'),
  contentLink: z.url('Enter a valid content URL'),
  notes: z.string().min(1, 'Notes for Reviewer are required'),
});

function ContentApproval(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(contentApprovalSchema),
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
    <h2 className="text-center mb-2">Content Approval Request</h2>
<p className="text-center text-muted mb-4">Submit your content for review before it goes live.</p>

{/* Content Title */}
<div className="mb-3">
  <label htmlFor="contentTitle" className="form-label">Content Title</label>
  <input type="text" className="form-control" id="contentTitle" placeholder="Content Title" {...register('contentTitle')}/>
  {errors.contentTitle && <span className="text-danger">{errors.contentTitle.message}</span>}
</div>

{/* Content Type */}
<div className="mb-3">
  <label htmlFor="contentType" className="form-label">Content Type</label>
  <select className="form-select" id="contentType" {...register('contentType')}>
    <option value="">Select Content Type</option>
    <option value="blog-post">Blog Post</option>
    <option value="social-media-post">Social Media Post</option>
    <option value="email">Email</option>
    <option value="ad-copy">Ad Copy</option>
  </select>
  {errors.contentType && <span className="text-danger">{errors.contentType.message}</span>}
</div>

{/* Content Link */}
<div className="mb-3">
  <label htmlFor="contentLink" className="form-label">Upload / Link to Content</label>
  <input type="url" className="form-control" id="contentLink" placeholder="https://..." {...register('contentLink')}/>
  {errors.contentLink && <span className="text-danger">{errors.contentLink.message}</span>}
</div>

{/* Notes */}
<div className="mb-3">
  <label htmlFor="notes" className="form-label">Notes for Reviewer</label>
  <textarea className="form-control" id="notes" rows="4" placeholder="Any specific points you want the reviewer to check..." {...register('notes')}></textarea>
  {errors.notes && <span className="text-danger">{errors.notes.message}</span>}
</div>

{/* Button */}
<button type="submit" className="btn login-btn">Send for Approval</button>
  </div>
  </div>
</form>
   </> )
}

export default ContentApproval;