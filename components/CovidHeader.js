import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ReactCountryFlag from 'react-country-flag';
import CovidTabs from './CovidTabs';
import axios from 'axios';

import styles from 'styled-components';

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
  margin: 0;
`;

const Container = styles.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 20px;
`;

// const [country, setAge] = React.useState('');

class SimpleSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'US',
      selected: 'argentina',
      countries: [],
      error: null,
    };
  }

  async fetchData() {
    let response = await axios
      .get('https://api.covid19api.com/countries')
      .then((response) => {
        this.setState({
          countries: response.data,
        });
      })
      .catch((error) => console.log(error.response));
  }

  componentDidMount() {
    this.fetchData();
    this.populateItems();
  }

  handleChange = (event) => {
    this.setState({ selected: event.target.value });
  };

  populateItems() {
    let countriesList = this.state.countries.map((country, index) => (
      <MenuItem
        value={country.Slug}
        style={{ display: 'flex' }}
        key={country.Country}
      >
        <ReactCountryFlag
          alt="US"
          svg
          countryCode={country.ISO2}
          style={{
            fontSize: '20px',
            borderRadius: '100px',
          }}
        />
        <p>{country.ISO2}</p>
      </MenuItem>
    ));

    console.log(this.state.countries);
    return countriesList;
  }

  render() {
    return (
      <>
        <CovidHeaderWrapper>
          <Container>
            <HeaderTitle>COVID-19</HeaderTitle>
            <FormControl>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.selected}
                onChange={(e) => this.handleChange(e)}
                defaultValue={this.state.default}
                style={{ margin: '0 10px' }}
              >
                {this.populateItems()}
              </Select>
            </FormControl>
          </Container>
        </CovidHeaderWrapper>
        <CovidTabs selectedCountry={this.state.selected} />
      </>
    );
  }
}

export default SimpleSelect;
