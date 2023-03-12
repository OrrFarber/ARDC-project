import { useContext, useState } from "react";
import { EmpContext } from "./Context/EmpContext";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  TextField,
  Card,
  Button,
  FormGroup,
  Typography,
} from "@mui/material";

function FormEmployer() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    companyName,
    setCompanyName,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    profession,
    setProfession,
    description,
    setDescription,
    requirements,
    setRequirements,
    other,
    setOther,
    logo,
    setLogo,
  } = useContext(EmpContext);

  const [imageForURL, setImageForURL] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function getImageURL() {
    const formData = new FormData();
    formData.append("file", imageForURL);
    formData.append("upload_preset", "wvowhemd");
    try {
      axios
        .post(
          "https://api.cloudinary.com/v1_1/dzfle6dgp/image/upload",
          formData
        )
        .then((response) => {
          setLogo(response?.data?.url);
        });
      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage("Error uploading image. Please try again.");
    }
  }

  const handleSignup = async () => {
    console.log(logo);
    let result = await axios.post("http://localhost:9000/registerE", {
      company: companyName,
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      profession: profession,
      description: description,
      requirements: requirements,
      logo: logo,
      other: other,
    });
    console.log(result);
    alert("User created");
  };

  return (
    <Card sx={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
      <FormControl>
        <FormGroup>
          <Typography sx={{ fontWeight: "bold" }} component="h2" variant="h4">
            Sign Up as Employer:{" "}
          </Typography>
          <FormLabel>Company Name: </FormLabel>
          <TextField
            label="Company Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <FormLabel>Email: </FormLabel>
          <TextField
            label="Email"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password: </FormLabel>
          <TextField
            label="Password"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>First Name: </FormLabel>
          <TextField
            label="First Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormLabel>Last Name: </FormLabel>
          <TextField
            label="Last Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormLabel>Profession: </FormLabel>
          <TextField
            label="Profession"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Profession"
            onChange={(e) => setProfession(e.target.value)}
          />
          <FormLabel>Description: </FormLabel>
          <TextField
            label="Description"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormLabel>Requirements: </FormLabel>
          <TextField
            label="Requirements"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Requirements"
            onChange={(e) => setRequirements(e.target.value)}
          />
          <FormLabel>Logo:</FormLabel>
          <input
            label="Logo URL"
            type="file"
            onChange={(e) => setImageForURL(e.target.files[0])}
          />
          <Button onClick={() => getImageURL()} variant="contained">
            Upload
          </Button>
          <FormLabel>Other: </FormLabel>
          <TextField
            label="Other"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Other things important to you..."
            onChange={(e) => setOther(e.target.value)}
          />

          <Button type="button" onClick={handleSignup}>
            Sign up
          </Button>
        </FormGroup>
      </FormControl>
    </Card>
  );
}

export default FormEmployer;
