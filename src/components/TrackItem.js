import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const TrackItem = ({ track }) => {
  const imageUrl = track.artworkUrl100.replace('100x100', '500x500');
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt={track.trackName}
      />
      <CardContent>
        <Typography variant="h6">{track.trackName}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {track.artistName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TrackItem;
