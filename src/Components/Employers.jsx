import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Paper, Card } from "@mui/material";

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/displayEmployers")
      .then((response) => {
        setEmployers(response.data.emps);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card>
      <Typography varient="h2" color="primary" sx={{ fontWeight: "bold" }}>
        Why should you hire a refugee?
      </Typography>
      <Typography varient="body">
        Hire refugees because they are talented and competent.
        <br />
        Refugees are highly adaptable, motivated, and committed to finding
        long-term stable jobs.
        <br />
        They have a unique understanding of emerging markets and can offer
        support in various languages.
        <br />
        They have a good understanding of Hebrew and Israeli culture, unlike
        outsourced teams overseas.
        <br />
        Refugees help garner a diverse and meaningful work environment.
        <br />
        Invest in the next generation of developers by taking on juniors and
        interns who will one day go on to build Africa's tech ecosystem.
      </Typography>
      <img src="/images/mirror.png" alt="icon" style={{ width: "20vw" }} />

      {employers.map((employer) => (
        <Paper
          key={employer._id}
          elevation={6}
          sx={{
            m: 1,
            mr: "8wv",
            ml: "8vw",
            p: 2,
            backgroundColor: "white",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h4" component="h5" color="primary">
            {employer.company}
          </Typography>
          {employer.logo && <img src={employer.logo} alt="Company logo"  width="300"/>}
          <Typography>Email: {employer.email}</Typography>
          <Typography>Job description: {employer.description}</Typography>
          <Typography>Requirements: {employer.requirements}</Typography>
          <Typography>Other: {employer.other}</Typography>
        </Paper>
      ))}
    </Card>
  );
};

export default EmployerList;
