import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import home from "../assets/about.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Card>
        <img height={"50px"} src={home} alt='home-image' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          You got the travel plans, we got the travel vans
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make perfect read trip
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          sx={{
            width: "93%",
            bgcolor: "orangered",
            margin: "auto",
            mt: 2,
            borderRadius: 2,
          }}
        >
          <Link to='/vans'>Find your van</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Home;
