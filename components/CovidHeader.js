import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ReactCountryFlag from 'react-country-flag';
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
  }

  state = {
    default: 'US',
    selected: '',
    countries: [],
    error: null,
  };

  async fetchData() {
    // <MenuItem
    //   value={this.state.default}
    //   style={{ display: 'flex' }}
    //   key={index}
    // >
    //   <ReactCountryFlag
    //     alt="US"
    //     svg
    //     countryCode={this.state.default}
    //     style={{
    //       fontSize: '20px',
    //       borderRadius: '100px',
    //     }}
    //   />
    //   <p>{this.state.default}</p>
    // </MenuItem>
    //
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
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ selected: event.target.value });
  };

  sayHello = () => {
    return (
      <MenuItem value={this.state.selected} style={{ display: 'flex' }}>
        <ReactCountryFlag
          alt="US"
          svg
          countryCode={this.state.default}
          style={{
            fontSize: '20px',
            borderRadius: '100px',
          }}
        />
        <p>{this.state.default}</p>
      </MenuItem>
    );
  };

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
                onChange={this.handleChange}
                defaultValue={this.state.default}
                style={{ margin: '0 10px' }}
              >
                {this.sayHello()}
              </Select>
            </FormControl>
          </Container>
        </CovidHeaderWrapper>
      </>
    );
  }
}

export default SimpleSelect;
