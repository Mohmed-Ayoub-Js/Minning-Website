import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonApplicationFromGlobal(props) {
  return (
    <Button variant="contained" disableElevation style={{margin:10}}>
      {props.title}
    </Button>
  );
}