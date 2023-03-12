import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function HomePage() {
  const WhiteLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
  });

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#A7E7F8", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#0077b6", scale: 1 });
  };

  const circleRef = useRef(null);
  useEffect(() => {
    gsap.to("#thirdCircle", {
      x: 100,
      duration: 2,
      ease: "bounce",
    });
  }, []);

  return (
    <div>
      <Grid>
        <CardActionArea>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{
                width: "100vw",
                height: "50vw",
                objectFit: "cover",
                objectPosition: "bottom",
              }}
              image="/images/home1.jpg"
              alt="home image"
            />
          </Card>
        </CardActionArea>

        <CardContent sx={{ flex: 1 }}>
          <div
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold" }}
              component="h2"
              variant="h4"
              color="primary"
            >
              ARDC Resource
            </Typography>
            <Typography
              sx={{ letterSpacing: 4 }}
              variant="subtitle1"
              color="primary.dark"
            >
              Meet your hiring needs while making an impact
            </Typography>
            <img
              src="/images/jobhome.png"
              alt="icon"
              style={{ width: "50vw" }}
            />
          </div>
        </CardContent>

        <CardActionArea>
          <Card
            ref={circleRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent
              sx={{
                flex: 1,
                m: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography component="p" variant="h5">
                Founded in 2004, ARDC is an Israeli non-profit organization that
                works to promote social inclusion and economic mobility for
                refugees through career guidance, job training, educational
                programming, and job placement.
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{
                width: "50vw",
              }}
              image="/images/home2.jpg"
              alt="home image"
            />
          </Card>
        </CardActionArea>
        <Card
          sx={{
            p: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography
              sx={{ letterSpacing: 1 }}
              variant="body1"
              color="primary.dark"
            >
              We meet can help you meet your hiring needs with qualified,
              skilled, and diligent employees from Israel's refugee communities.
            </Typography>
            <Button
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              color="primary"
              variant="contained"
              sx={{ m: 2 }}
            >
              <WhiteLink to="/Register">Join now</WhiteLink>
            </Button>
          </div>
          <img src="/images/home3.png" alt="icon" style={{ width: "30vw" }} />
        </Card>
      </Grid>
    </div>
  );
}

export default HomePage;
