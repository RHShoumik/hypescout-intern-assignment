import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profiles from './components/ProfileCard/Profiles';
import Search from './components/Search';
import Users from './usersProfile';

function App() {
  const [filterProfiles, setFilterProfiles] = useState(Users);

  const handleSearch = (searchItem) => {
    const item = searchItem.toLowerCase();
    if (item === "") {
      setFilterProfiles(Users);
      return filterProfiles;
    }
    const searchFilter = filterProfiles.filter((user) => {
      const userName = user.name.toLowerCase();
      return userName.match(item);
    });
    console.log(searchFilter)
    setFilterProfiles(searchFilter);
  };
  return (
    <div className="App">
      <Header />
      <Search onSearch={handleSearch} />
      {filterProfiles && <Profiles allProfiles={filterProfiles} />}
      <Footer />
    </div>
  );
}

export default App;
