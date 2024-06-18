import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { fetchTracks } from '../redux/actions/trackActions';
import { useSelector } from 'react-redux';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tracks.loading);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchTracks(query));
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <TextField 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for music..." 
        variant="outlined"
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
      {loading ? 'Loading...' : 'Search'}
      </Button>
    </div>
  );
};

export default Search;
