import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './SearchButton.css';
export default function ContainedButtons() {
  return (
    <Stack direction="column" spacing={2} className="search-button">
      <Button variant="contained" color="primary">Search</Button>
 
      {/* You can add more buttons here */}
    </Stack>
  );
}
