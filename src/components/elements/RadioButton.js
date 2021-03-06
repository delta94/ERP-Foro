import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



export default function RadioButtons(props) {
    const [value, setValue] = useState('');
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        props.setHasAnswer(event.target.value)
    };
    return (
      <div>
        <FormControl component="fieldset">
            <FormLabel component="legend">Do you have the answer/solution ready?</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={value} onChange={handleRadioChange}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" labelPlacement="end"/>
                <FormControlLabel value="no" control={<Radio />} label="No" labelPlacement="end" />
            </RadioGroup>
        </FormControl>
      </div>
    );
  }