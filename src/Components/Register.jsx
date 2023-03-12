import { Button, styled, Typography, Card } from "@mui/material";
import { NavLink } from "react-router-dom";

function Register() {
  const WhiteLink = styled(NavLink)({
    color: "#0077b6",
    textDecoration: "none",
    padding: 4,
  });

  return (
    <div>
      <Card
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          color="primary"
          sx={{ fontWeight: "bold" }}
          component="h4"
          variant="h4"
        >
          Sign up as:
        </Typography>
        <Button
          variant="outlined"
          sx={{ m: 1, fontWeight: "bold", width: 200 }}
        >
          <WhiteLink to="/FormApplicant">Applicant</WhiteLink>
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 1, fontWeight: "bold", width: 200 }}
        >
          <WhiteLink to="/FormEmployer">Employer</WhiteLink>
        </Button>
        <img src="/images/signup.png" alt="icon" style={{ width: "50vw" }} />
      </Card>
    </div>
  );
}

export default Register;
