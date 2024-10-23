import { AspectRatio } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

export default function MovieVideoPlayer({ movieId }: { movieId: string }) {
  return (
    <Box
      sx={{
        width: '100%',
        marginBottom: '2rem',
      }}
    >
      <iframe
        src={`https://vidsrc.xyz/embed/movie/${movieId}`}
        allowFullScreen
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '16/9',
          borderRadius: '.6rem',
          borderColor: 'transparent',
        }}
      />
    </Box>
  );
}
