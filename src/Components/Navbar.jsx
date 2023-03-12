import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BadgeIcon from "@mui/icons-material/Badge";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BungalowIcon from "@mui/icons-material/Bungalow";

function Navbar() {
  const WhiteLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: 4,
    fontFamily: "Oswald",
    "&:hover": {
      fontWeight: "bold",
    },
  });

  return (
    <AppBar>
      <Toolbar
        sx={{
          position: "static",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <WhiteLink to="/">
          <BungalowIcon />
          Home
        </WhiteLink>
        <WhiteLink to="/Register">
          <LockOpenIcon /> Register
        </WhiteLink>
        <WhiteLink to="/Login">
          <VpnKeyIcon /> Login
        </WhiteLink>
        <WhiteLink to="/Employers">
          <BadgeIcon /> Employers
        </WhiteLink>
        <WhiteLink to="/Services">
          <DesignServicesIcon />
          Services
        </WhiteLink>
        {localStorage.getItem("token") ? (
          <WhiteLink to="/EditApplicant">
            <AccountCircleIcon /> Profile
          </WhiteLink>
        ) : (
          ""
        )}
        <WhiteLink to="/ContactUs">
          <ContactPageIcon /> Contact Us
        </WhiteLink>
        {/*     <WhiteLink sx={{ display: role === "Admin" ? "" : "none" }} to="/Admin">
          Admin
        </WhiteLink> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
