import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Card, Typography, Link } from "@mui/material";

function ContactUs() {
  return (
    <div>
      <Card sx={{ p: 1, m: 1 }}>
        <Typography color="primary" variant="h5" sx={{ fontWeight: "bold" }}>
          Contact us:
        </Typography>

        <Link
          target="_blank"
          href="https://www.linkedin.com/company/african-refugee-development-center/?originalSubdomain=il"
        >
          <LinkedInIcon sx={{ width: "4vw", height: "4vw", p: 2 }} />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/ardc_israel/?hl=en"
        >
          <InstagramIcon sx={{ width: "4vw", height: "4vw", p: 2 }} />
        </Link>
        <Link target="_blank" href="https://twitter.com/ARDC_org">
          <TwitterIcon sx={{ width: "4vw", height: "4vw", p: 2 }} />
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/ARDCinISRAEL/?fref=ts"
        >
          <FacebookIcon sx={{ width: "4vw", height: "4vw", p: 2 }} />
        </Link>
        <div>
          <img src="/images/contact.png" alt="icon" style={{ width: "40vw" }} />
        </div>
      </Card>
      <img
        src="/images/contactrefugee.jpg"
        alt="icon"
        style={{
          width: "100vw",
          height: "40vw",
          objectFit: "cover",
          objectPosition: "30% 75%",
        }}
      />
    </div>
  );
}

export default ContactUs;
