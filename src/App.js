import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profiles from './components/ProfileCard/Profiles';
import Search from './components/Search';
import Users from './usersProfile';


const theme = createTheme({
  typography: {
    fontFamily: ["Sen", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#231F20",
    },
    secondary: {
      main: "#564FB1",
    },
  },
});
function App() {
  const [filterProfiles, setFilterProfiles] = useState(Users);
  const [filterCategory, setFilterCategory] = useState("")

  const handleSearch = (searchItem) => {
    const item = searchItem.toLowerCase();
    if (item === "") {
      setFilterProfiles(Users);
      return filterProfiles;
    }
    else {
      const searchFilter = filterProfiles.filter((user) => {
        const userName = user.name.toLowerCase();
        return userName.match(item);
      });
      
      console.log(filterCategory);
      setFilterProfiles(searchFilter);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Search
          totalUser={Users.length}
          onSearch={handleSearch}
          setFilterCategory={setFilterCategory}
        />
        {filterProfiles && <Profiles users={filterProfiles} />}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
