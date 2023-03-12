import axios from "axios";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Card,
  Button,
  FormGroup,
} from "@mui/material";

function EditApplicant() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [bio, setBio] = useState();
  const [experience, setExperience] = useState();
  const [mainSkill, setMainSkill] = useState();
  const [skills, setSkills] = useState();
  const [CV, setCV] = useState();

  const handleEdit = async () => {
    let result = axios.post("http://localhost:9000/editApplicant", {
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
    console.log(result.data);
    alert("User created!");
  };

  return (
    <Card>
      <FormControl sx={{ display: "flex", items: "center", p: 3 }}>
        <FormGroup>
          <h1>Sign Up as Applicant: </h1>
          <FormLabel>First Name: </FormLabel>
          <TextField
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormLabel>Last Name: </FormLabel>
          <TextField
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
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password: </FormLabel>
          <TextField
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>Bio: </FormLabel>
          <TextField
            type="text"
            placeholder="Bio"
            onChange={(e) => setBio(e.target.value)}
          />
          <FormLabel>Experience: </FormLabel>
          <TextField
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
          <FormLabel>Other skills (optional):</FormLabel>
          <TextField id="skills" onClick={(e) => setSkills(e.target.value)} />
          <Button
            type="button"
            variant="contained"
            sx={{ mt: 1 }}
            onClick={handleEdit}
          >
            Update
          </Button>
        </FormGroup>
      </FormControl>
    </Card>
  );
}

export default EditApplicant;
