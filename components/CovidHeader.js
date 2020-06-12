import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ReactCountryFlag from 'react-country-flag';
import styles from 'styled-components';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CovidHeaderWrapper = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('US');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <CovidHeaderWrapper>
      <h3>COVID-19</h3>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          <ReactCountryFlag
            alt="US"
            countryCode="US"
            style={{
              fontSize: '30px',
            }}
          />
        </InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>
            <ReactCountryFlag
              alt="US"
              countryCode="US"
              style={{
                fontSize: '20px',
              }}
            />
          </MenuItem>
          <MenuItem value={20}>
            <ReactCountryFlag
              alt="US"
              countryCode="US"
              style={{
                fontSize: '20px',
              }}
            />
          </MenuItem>
          <MenuItem value={30}>
            <ReactCountryFlag
              alt="US"
              countryCode="US"
              style={{
                fontSize: '20px',
              }}
            />
          </MenuItem>
        </Select>
      </FormControl>
    </CovidHeaderWrapper>
  );
}
