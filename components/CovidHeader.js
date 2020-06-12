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
  width: 100%;
`;

const HeaderTitle = styles.h3`
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styles.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
`;

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('US');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <CovidHeaderWrapper>
        <Container>
          <HeaderTitle>COVID-19</HeaderTitle>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={null}
              onChange={handleChange}
              defaultValue={10}
            >
              <MenuItem value={10}>
                <ReactCountryFlag
                  alt="US"
                  svg
                  countryCode="US"
                  style={{
                    fontSize: '20px',
                    borderRadius: '100px',
                  }}
                />
              </MenuItem>
              <MenuItem value={20}>
                <ReactCountryFlag
                  alt="US"
                  svg
                  countryCode="BR"
                  style={{
                    fontSize: '20px',
                    borderRadius: '100px',
                  }}
                />
              </MenuItem>
              <MenuItem value={30}>
                <ReactCountryFlag
                  alt="US"
                  svg
                  countryCode="IT"
                  style={{
                    fontSize: '20px',
                  }}
                />
              </MenuItem>
            </Select>
          </FormControl>
        </Container>
      </CovidHeaderWrapper>
    </>
  );
}
