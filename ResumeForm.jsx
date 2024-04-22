// src/components/ResumeForm.jsx
import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';

const ResumeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="First Name"
            name="firstName"
            fullWidth
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Last Name"
            name="lastName"
            fullWidth
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            fullWidth
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Skills"
            name="skills"
            type="tel"
            fullWidth
            variant="outlined"
            value={formData.skills}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Work Experience"
            name="work experience"
            type="tel"
            fullWidth
            variant="outlined"
            value={formData.workexperience}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Bio"
            name="bio"
            multiline
            minRows={6}
            fullWidth
            variant="outlined"
            value={formData.bio}
            onChange={handleChange}
            
            
          />
          
        </Grid>
        
        <Grid item xs={12} >
          <Button type="submit" color="primary" variant="contained" style={{float:'left'}}>
            Create Resume
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ResumeForm;