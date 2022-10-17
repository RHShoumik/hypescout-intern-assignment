
import { Box, Grid } from '@mui/material';
import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Box sx={{ flexGrow: 1 }} padding={{xs : "10px 20px", md  : "15px 130px"}} >
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          columns={{ xs: 1, md: 9 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={1} md={3} key={index}>
              <ProfileCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
