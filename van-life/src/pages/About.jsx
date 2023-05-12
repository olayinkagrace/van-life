import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import about from "../assets/about.png";
import {Link} from 'react-router-dom'



function About() {
  return (
    <Card>
      <img height={"200px"} width={"100%"} src={about} alt='home-image' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Dont squeeze in a sedan when you could relax in a van
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉 Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </Typography>
      </CardContent>
      <CardContent>
        <div className="aboutDiv">
      <Typography gutterBottom variant='h5' component='div' >
      Your destination is waiting.<br />Your van is ready
        </Typography>
        <CardActions>
            <Link to='/vans'><Button
              variant='contained'
              sx={{
               
                bgcolor: "black",
                margin: "auto",
                mt: 2,
                borderRadius: 2,
              }}
            >
              Explore our van
            </Button></Link>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}

export default About;
