import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";
import EmployersList from "./Components/Employers";
import FormEmployer from "./Components/FormEmployer";
import FormApplicant from "./Components/FormApplicant";
import ServicesList from "./Components/Services";
import Navbar from "./Components/Navbar";
import Resumes from "./Components/Resume";
import Login from "./Components/Login";
import EmpContext from "./Components/Context/EmpContext";
import AppContext from "./Components/Context/AppContext";
import EditApplicant from "./Components/EditApplicant";



function App() {
  // const {
  //   role
  // } = useContext(AppContext)
  return (
    <AppContext>
      <EmpContext>
        <div className="App">
          <div>
            <Navbar />
            <div style={{ marginTop: "5rem", paddingBottom: 2 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Register" element={<Register />} />
                <Route
                  path="/Login"
                  element={localStorage.getItem("token") ? <HomePage /> : <Login />}
                />
                <Route path="/FormApplicant" element={<FormApplicant />} />
                <Route path="/FormEmployer" element={<FormEmployer />} />
                <Route path="/Employers" element={<EmployersList />} />
                <Route path="/Services" element={<ServicesList />} />
                <Route path="/Resumes" element={<Resumes />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                {/* <Route path="/Admin" element={role ? <Admin /> : <HomePage />} /> */}

                {localStorage.getItem("token") ? (
                  <Route path="/EditApplicant" element={<EditApplicant />} />
                ) : (
                  // <Route path="/EditApplicant" element={<E />} />
                  ""
                )}
              </Routes>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </EmpContext>
    </AppContext>
  );
}

export default App;
