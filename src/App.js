import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login";
import AdminHome from "./Components/Admin/admin_home";
import AdminChild from "./Components/Admin/ChildHome_Details.jsx";
import Feedback from "./Components/Admin/Feedback.jsx";
import AdminParent from "./Components/Admin/Parent_Details";

import ChildHomeEvents from "./Components/ChildHome/ChildHomeEvents";
import ChildHomeProfile from "./Components/ChildHome/ChildHomeProfile";
import Childhhomereg from "./Components/ChildHome/ChildHomereg";
import ChildHomeTable from "./Components/ChildHome/ChildHomeTable";
import EditHomeProfile from "./Components/ChildHome/EditProfile";
import InitiateAdoptionRequest from "./Components/ChildHome/InitiateAdoptionRequest";
import UploadCertificate from "./Components/ChildHome/UploadCertificate";
import ContactUs from "./Components/ContactUs/ContactUs";
import RazorpayPayment from "./Components/Donation/RazorpayPayment";
import Events from "./Components/Event/Events.jsx";
import Home from "./Components/Home/Home";
import BookingStatus from "./Components/Parent/BookingStatus";
import EditProfile from "./Components/Parent/EditProfile";
import ParentFeedback from "./Components/Parent/ParentFeedback.jsx";
import Parentprofile from "./Components/Parent/Parentprofile";
import ParentRegistration from "./Components/Registration/ParentRegistration";
import AnnualReportPage from "./Components/Resources/AnnualReportPage";
import ImportantCourtOrdersPage from "./Components/Resources/ImportantCourtOrdersPage";
import SchemesAndGuidelinesPage from "./Components/Resources/SchemesAndGuidelinesPage";
import EditRequestStatus from "./Components/Socialworker/EditRequestStatus.jsx";
import SocialWorkerEdit from "./Components/Socialworker/SocialWorkerEdit";
import SocialWorkerProfile from "./Components/Socialworker/SocialWorkerProfile";
import SocialWorkerRegistration from "./Components/Socialworker/SocialWorkerRegistration";
import { AuthProvider } from "./Components/Authenticate/AuthContext.jsx";
import ProtectedRoute from "./Components/Authenticate/ProtectedRoute.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import BookingSlot from "./Components/Parent/BookingSlot.jsx";
import AddChildForm from "./Components/ChildHome/AddChildForm.jsx";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/donate" element={<RazorpayPayment />} />
          <Route path="/Applicantreg" element={<ParentRegistration />} />
          <Route path="/Childhomereg" element={<Childhhomereg />} />
          <Route
            path="/displayhomes" element={<ChildHomeTable />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schemesAndGuidelinesPage" element={<SchemesAndGuidelinesPage />} />
          <Route path="/importantCourtOrdersPage" element={<ImportantCourtOrdersPage />} />
          <Route path="/annualReportPage" element={<AnnualReportPage />} />
          <Route
            path="/parent"
            element={
              <ProtectedRoute>
                <Parentprofile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parent/bookingslot"
            element={<ProtectedRoute><BookingSlot /></ProtectedRoute>}
          />
          <Route
            path="/parent/feedback"
            element={
              <ProtectedRoute>
                <ParentFeedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parent/status"
            element={
              <ProtectedRoute>
                <BookingStatus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/parent/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/parentdetails"
            element={
              <ProtectedRoute>
                <AdminParent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/childhomedetails"
            element={
              <ProtectedRoute>
                <AdminChild />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/feedback/:id"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome"
            element={
              <ProtectedRoute>
                <InitiateAdoptionRequest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome/addchild"
            element={
              <ProtectedRoute>
                <AddChildForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome/registerSocialWorker"
            element={
              <ProtectedRoute>
                <SocialWorkerRegistration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome/uploadcertifiacte"
            element={
              <ProtectedRoute>
                <UploadCertificate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome/addevent"
            element={
              <ProtectedRoute>
                <ChildHomeEvents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childhome/edit"
            element={
              <ProtectedRoute>
                <EditHomeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/childHomeProfile"
            element={
              <ProtectedRoute>
                <ChildHomeProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/social/edit"
            element={
              <ProtectedRoute>
                <SocialWorkerEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="/socialworkerChangeStatus"
            element={
              <ProtectedRoute>
                <EditRequestStatus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/socialWorkerProfile"
            element={
              <ProtectedRoute>
                <SocialWorkerProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
