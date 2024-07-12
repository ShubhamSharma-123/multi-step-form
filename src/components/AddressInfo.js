import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const AddressInfo = ({ data, handleChange, prevStep, nextStep, errors }) => {
  return (
    <div>
      <h2>Address Information</h2>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              name="address1"
              value={data.address1}
              onChange={handleChange}
              error={!!errors.address1}
              helperText={errors.address1}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address Line 2"
              name="address2"
              value={data.address2}
              onChange={handleChange}
              error={!!errors.address2}
              helperText={errors.address2}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={data.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="State"
              name="state"
              value={data.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Zip Code"
              name="zip"
              value={data.zip}
              onChange={handleChange}
              error={!!errors.zip}
              helperText={errors.zip}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={prevStep} fullWidth>
              Back
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={nextStep} fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddressInfo;
