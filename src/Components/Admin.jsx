import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Paper } from "@mui/material";



const Admin = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/displayEmployers")
      .then(response => {
        setEmployers(response.data.emps);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const handleClick = (id) => {
    axios.post(`http://localhost:9000/deleteEmployer/${id}`)
      .then(response => {
        setEmployers(employers.filter(emps => emps._id !== id))
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <h2>Approve Companies form to the website</h2>
      {employers.map(employer => (
        <Paper key={employer._id} sx={{ m: 1, mr: "4wv", ml: "4vw" }}>
          <Typography variant="h4" component="h5">Name of company: {employer.company}</Typography>
          {employer.logo && <img src={employer.logo} alt="Company logo" />}
          <Typography>Email: {employer.email}</Typography>
          <Typography>Job description: {employer.description}</Typography>
          <Typography>Requirements: {employer.requirements}</Typography>
          <Typography>Other: {employer.other}</Typography>
          <Button>Approve</Button>
          <Button onClick={() => handleClick(employer._id)}>Delete</Button>
        </Paper>
      ))}
    </div>
  );
}

export default Admin;
