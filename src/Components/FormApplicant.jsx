import axios from "axios";
import {
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Card,
  Button,
  FormGroup,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";

function FormApplicant() {
  const {
    firstName, setFirstName,
    lastName, setLastName,
    gender, setGender,
    email, setEmail,
    password, setPassword,
    bio, setBio,
    experience, setExperience,
    mainSkill, setMainSkill,
    skills, setSkills,
    CV, setCV
  } = useContext(AppContext)

  const handleSignup = async () => {
    let result = axios.post("http://localhost:9000/registerA", {
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      email: email,
      password: password,
      bio: bio,
      experience: experience,
      skills: `${mainSkill}, ${skills}`,
      cv: CV,
    });
    console.log(result);
    alert("User created!");
    console.log(email);
  };

  return (
    <Card sx={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
      <FormControl sx={{ display: "flex", items: "center", p: 3 }}>
        <FormGroup>
          <Typography sx={{ fontWeight: "bold" }} component="h2" variant="h4">
            Sign Up as Applicant:
          </Typography>
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
            margin="dense"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormLabel>Gender: </FormLabel>
          <Select id="gender" onClick={(e) => setGender(e.target.value)}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
          <FormLabel>Email: </FormLabel>
          <TextField
            label="Email"
            margin="dense"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password: </FormLabel>
          <TextField
            label="Password"
            margin="dense"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>Bio: </FormLabel>
          <TextField
            label="Bio"
            margin="dense"
            type="text"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          />
          <FormLabel>Experience: </FormLabel>
          <TextField
            label="Experience"
            margin="dense"
            type="text"
            placeholder="Experience"
            onChange={(e) => setExperience(e.target.value)}
          />
          <FormLabel>Choose your main skill</FormLabel>
          <Select
            name="main-skill"
            id="main-skill"
            onChange={(e) => setMainSkill(e.target.value)}
          >
            <MenuItem value="QA Engineer">QA Engineer</MenuItem>
            <MenuItem value="Manual QA Engineer">Manual QA Engineer</MenuItem>
            <MenuItem value="Technical Support and Helpdesk">
              Technical Support and Helpdesk
            </MenuItem>
            <MenuItem value="IT Technician">IT Technician</MenuItem>
            <MenuItem value="Java Developer">Java Developer</MenuItem>
            <MenuItem value="Python Developer">Python Developer</MenuItem>
            <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
            <MenuItem value="Customer Support Representative">
              Customer Support Representative
            </MenuItem>
          </Select>
          <FormLabel>Other skills (optioal):</FormLabel>
          <TextField
            label="Other skills"
            margin="dense"
            id="skills"
            onClick={(e) => setSkills(e.target.value)}
          />
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1 }}
            onClick={handleSignup}
          >
            Sign up
          </Button>
        </FormGroup>
      </FormControl>
    </Card>
  );
}

export default FormApplicant;
