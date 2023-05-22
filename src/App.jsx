import CardPost from './components/card';
import AboutMe from './components/aboutMe';
import Header from './components/header';
import Container from 'react-bootstrap/Container';
import {HashRouter, Route, Routes} from 'react-router-dom';
import UserDetails from './components/userDetails';

const App = () => {
  return (
    <HashRouter basename='/'>
      <div className='app'>
        <Container>
          <Header />
          <Routes>
            <Route path='/' element={<CardPost />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/user/:id' element={<UserDetails />} />
          </Routes>
        </Container>
      </div>
    </HashRouter>
  );
};

export default App;

