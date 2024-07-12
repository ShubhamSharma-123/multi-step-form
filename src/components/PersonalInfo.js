import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const PersonalInfo = ({ data, handleChange, nextStep, errors }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              margin="normal"
              type='text'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              margin="normal"
              
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={nextStep} fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default PersonalInfo;
