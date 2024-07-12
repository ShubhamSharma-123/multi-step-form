import React from 'react';
import { Button, Grid } from '@mui/material';

const Confirmation = ({ data, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Address Line 1: {data.address1}</p>
          <p>Address Line 2: {data.address2}</p>
          <p>City: {data.city}</p>
          <p>State: {data.state}</p>
          <p>Zip Code: {data.zip}</p>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" onClick={prevStep} fullWidth>
            Back
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Confirmation;
