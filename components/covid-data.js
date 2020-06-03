import React, { Component } from 'react';
import axios from 'axios';

export default class Covid extends Component {
  state = {
    confirmed: 'loading..',
    active: 'loading..',
    recovered: 'loading',
    deaths: 'loading',
    error: null,
  };

  async fetchData() {
    const response = await axios.get('https://api.covid19api.com/summary');
    console.log(response);
    try {
      this.setState({
        confirmed: response.data.Global.TotalConfirmed.toString(),
        active: response.data.Global.TotalConfirmed,
        recovered: response.data.Global.TotalRecovered,
        deaths: response.data.Global.TotalDeaths,
      });
    } catch (error) {
      this.setState({ error });
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <div className="covid-box">
          <div className="box-item confirmed">
            <p>Aggregated Confirmed</p>
            <span>{this.state.confirmed}</span>
          </div>
          <div className="box-item total-active">
            <p>Active</p>
            <span>{this.state.active}</span>
          </div>
          <div className="box-item recovered">
            <p>Recovered</p>
            <span>{this.state.recovered}</span>
          </div>
          <div className="box-item deaths">
            <p>Deaths</p>
            <span>{this.state.deaths}</span>
          </div>
        </div>
      </>
    );
  }
}
