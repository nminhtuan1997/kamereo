import React from 'react';
import { useSelector } from 'react-redux';
import TrackItem from './TrackItem';
import { Grid } from '@mui/material';

const TrackList = () => {
  const tracks = useSelector((state) => state.tracks.items);
  const error = useSelector((state) => state.tracks.error);
  
  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  if (!tracks.length) {
    return <p>No results found.</p>;
  }

  return (
    <Grid container spacing={3} style={{ marginTop: '20px' }}>
      {tracks.map((track) => (
        <Grid item key={track.trackId} xs={12} sm={6} md={4} lg={3}>
          <TrackItem track={track} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TrackList;
