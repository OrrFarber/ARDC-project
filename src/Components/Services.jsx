import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Paper } from "@mui/material";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/displayServices")
      .then((response) => {
        setServices(response.data.servs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Typography color="primary" variant="h3">
        Our Applicants offer you varient of skills:
      </Typography>
      <Typography variant="h4">What are our graduates skilled in?</Typography>
      <Typography variant="body1">
        Python, PANDAS, JavaScript, React.js, Node.js, HTML, CSS, DOM, JSON,
        XML, Jira, Postman, AVD, LogCat, Profile, Genymotion, Dev Tool, SQL,
        MySQL, MongoDB, Oracle Database, ZOHO creator, STD, STP, STR, SRS, ios,
        Android, FakeGPS, TunnelBear, Fiddler, Android Studio, Selenium,
        Eclipse, Wireshark, WirelessNetView, Microsoft Network Monitor, VMware
        Workstation, Oracle VirtualBox, Windows Virtual PC, Cisco OS and MORE.
      </Typography>
      {services.map((serv) => (
        <Paper
          elevation={6}
          key={serv._id}
          sx={{
            m: 1,
            mr: "8wv",
            ml: "8vw",
            p: 2,
            backgroundColor: "#d4f1f9",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5" component="h5">
            Title: {serv.title}
          </Typography>
          <Typography>Description: {serv.description}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default ServicesList;
