import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import SearchBar from './components/Search';
import TrackList from './components/TrackList';

function App() {
  return (
    <Container>
      <SearchBar />
      <TrackList />
    </Container>
  );
}

export default App;
