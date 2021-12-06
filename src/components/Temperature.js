/* eslint-disable react/prop-types */
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Temperature = ({ unit, onChange }) => (
  <FormControl component="fieldset">
    <RadioGroup row aria-label="temparature" name="controlled-radio-buttons-group" value={unit} onChange={(e) => onChange(e.target.value)}>
      <FormControlLabel value="metric" control={<Radio />} label="Celcius" className="temp" />
      <FormControlLabel value="imperial" control={<Radio />} label="Fahrenheit" />
    </RadioGroup>
  </FormControl>
);

export default Temperature;
