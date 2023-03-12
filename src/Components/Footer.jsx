import { Link } from "@mui/material";

function Footer() {
  return (
    <div>
      <button></button>
      <Link
        target="_blank"
        href="https://www.linkedin.com/company/african-refugee-development-center/?originalSubdomain=il"
      >
        <LinkedInIcon sx={{ width: "2vw", height: "2vw", p: 2 }} />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/ardc_israel/?hl=en">
        <InstagramIcon sx={{ width: "2vw", height: "2vw", p: 2 }} />
      </Link>
      <Link target="_blank" href="https://twitter.com/ARDC_org">
        <TwitterIcon sx={{ width: "2vw", height: "2vw", p: 2 }} />
      </Link>
      <Link
        target="_blank"
        href="https://www.facebook.com/ARDCinISRAEL/?fref=ts"
      >
        <FacebookIcon sx={{ width: "2vw", height: "2vw", p: 2 }} />
      </Link>
      <button></button>
    </div>
  );
}

export default Footer;
