// src/components/Resume.jsx
import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

const Resume = React.forwardRef(({formData}, ref) => {
    return (
      <div ref={ref}>
  
    <Paper style={{ padding: 20 }}>
      <Typography variant="h4">{formData.firstName} {formData.lastName}</Typography>
      <Typography variant="subtitle1">{formData.email}</Typography>
      <Typography variant="subtitle1">{formData.phone}</Typography>
      <Typography variant="subtitle1">{formData.education}</Typography>
      <Typography variant="subtitle1">{formData.degree}</Typography>
      <Typography variant="subtitle1">{formData.skills}</Typography>
      <Typography variant="body1">{formData.bio}</Typography>
      <Typography variant="subtitle1">{formData.profilephoto}</Typography>
    
    </Paper>
    </div>
  );
});

export default Resume;