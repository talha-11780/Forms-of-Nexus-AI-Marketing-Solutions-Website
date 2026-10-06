import Login from "./Forms/Login.jsx";
import Registration from "./Forms/Registration.jsx";
import ContactUs from "./Forms/Contactus.jsx";
import Feedback from "./Forms/Feedback.jsx";
import CompaignCreation from "./Forms/CompaignCreation.jsx";
import ContentApproval from "./Forms/ContentApproval.jsx";
import PostScheduler from "./Forms/PostScheduler.jsx";
import AddTeamMember from "./Forms/AddTeamMmeber.jsx";
import AddService from "./Forms/AddService.jsx";
import DeleteService from "./Forms/DeleteService.jsx";
import EditService from "./Forms/EditService.jsx";
import BookFreeCall from "./Forms/BookFreeCall.jsx";         

function App()
{ 
    return (
    <>
 < Login/>
 <Registration/>
 <ContactUs/>
 <Feedback/>
 <CompaignCreation/>
 <ContentApproval/>
 <PostScheduler/>
 <AddTeamMember/>
<AddService/>
 <DeleteService/>
<EditService/>
 <BookFreeCall/>
</>
   );
}
export default App;