import React, { Component } from 'react';
import axios from 'axios';
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';
import styles from 'styled-components';

import MenuItem from '@material-ui/core/MenuItem';
import ReactCountryFlag from 'react-country-flag';

const Container = styles.div`
  padding: 0 20px; 
`;

const PieWrapper = styles.div`
  width: 100%;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 10px auto;
  padding: 0;
`;

const CasesWrapper = styles.div`
  width: 100%;
  margin: 10px auto;
  padding: 0;
`;

const CasesList = styles.ul`
  padding: 10px 20px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 10px auto !important;
`;

const CasesListItem = styles.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #455B6314;
  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  } 


`;

const StatusItem = styles.span`
  max-width: 12px;
  height: 12px;
  border-radius: 3px;
  display: block;
  flex: 1;
  margin-right: 20px;
`;

const ItemTitle = styles.p`
  flex: 3;
  font-weight: bold;
  color: #3C4954;
`;

const ItemTotal = styles.span`
  flex: 1;
  font-weight: normal;
  text-align: right;
  color: #3C4954;
  font-size: 18px;
`;

const StatsWrapper = styles.div`
  width: 100%;
  padding: 20px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 10px auto;
  display: flex;
  justify-content: space-between
  color: #3C4954;`;

const Stat = styles.li`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #F4F4F6;
  &:last-child {
    border-right: none;
  } 
`;

const StatLabel = styles.span`
  font-size: 20px;
  font-size: 14px;
  color: #748A9D;
  font-weight: 200;
`;

const StatValue = styles.span``;

class CovidCases extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    country: this.props.country,
    confirmed: 'loading..',
    active: 'loading..',
    recovered: 'loading',
    deaths: 'loading',
    error: null,
    pieData: [
      { x: '', y: 100 },
      { x: '', y: 0 },
      { x: '', y: 0 },
    ],
  };

  async fetchData() {
    const response = await axios
      .get(`https://api.covid19api.com/live/country/${this.props.country}`)
      // .then((response) =>
      //   console.log(
      //     response.data[Object.keys(response.data).length - 1].Country
      //   )
      // )
      .then((response) =>
        this.setState({
          country: response.data[Object.keys(response.data).length - 1].Country,
          confirmed:
            response.data[Object.keys(response.data).length - 1].Confirmed,
          active: response.data[Object.keys(response.data).length - 1].Active,
          recovered:
            response.data[Object.keys(response.data).length - 1].Recovered,
          deaths: response.data[Object.keys(response.data).length - 1].Deaths,
          pieData: [
            {
              x: `${(
                (response.data[Object.keys(response.data).length - 1]
                  .Recovered /
                  response.data[Object.keys(response.data).length - 1]
                    .Confirmed) *
                100
              ).toFixed(2)}%`,
              y: response.data[Object.keys(response.data).length - 1].Recovered,
            },
            {
              x: `${(
                (response.data[Object.keys(response.data).length - 1].Active /
                  response.data[Object.keys(response.data).length - 1]
                    .Confirmed) *
                100
              ).toFixed(2)}%`,
              y: response.data[Object.keys(response.data).length - 1].Active,
            },
            {
              x: `${(
                (response.data[Object.keys(response.data).length - 1].Deaths /
                  response.data[Object.keys(response.data).length - 1]
                    .Confirmed) *
                100
              ).toFixed(2)}%`,
              y: response.data[Object.keys(response.data).length - 1].Deaths,
            },
          ],
        })
      );
  }

  componentDidUpdate() {
    this.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <CasesWrapper>
        <Container>
          <PieWrapper>
            <svg
              viewBox="0 0 270 270"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
                margin: '10px auto',
              }}
            >
              <VictoryPie
                standalone={false}
                width={270}
                height={270}
                data={this.state.pieData}
                innerRadius={105}
                labelRadius={112}
                startAngle={-90}
                endAngle={270}
                colorScale={['#55E13A', '#FFC259', '#FF5959']}
                style={{
                  labels: { fontSize: 16, fill: 'black' },
                }}
              />
              <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 40, fontFamily: 'Roboto' }}
                x={135}
                y={135}
                text={this.state.confirmed}
              />
            </svg>
          </PieWrapper>
        </Container>

        <Container>
          <CasesWrapper>
            <CasesList>
              <CasesListItem>
                <StatusItem style={{ background: '#FFC259' }} />
                <ItemTitle>Active Cases</ItemTitle>
                <ItemTotal>{this.state.active}</ItemTotal>
              </CasesListItem>
              <CasesListItem>
                <StatusItem style={{ background: '#55E13A' }} />
                <ItemTitle>Discharge</ItemTitle>
                <ItemTotal>{this.state.recovered}</ItemTotal>
              </CasesListItem>
              <CasesListItem>
                <StatusItem style={{ background: '#FF5959' }} />
                <ItemTitle>Deaths</ItemTitle>
                <ItemTotal>{this.state.deaths}</ItemTotal>
              </CasesListItem>
            </CasesList>
          </CasesWrapper>
        </Container>

        <Container>
          <StatsWrapper>
            <Stat>
              <StatValue>9000</StatValue>
              <StatLabel>Male</StatLabel>
            </Stat>
            <Stat>
              <StatValue>55</StatValue>
              <StatLabel>Female</StatLabel>
            </Stat>
            <Stat>
              <StatValue>280</StatValue>
              <StatLabel>Children</StatLabel>
            </Stat>
          </StatsWrapper>
        </Container>
      </CasesWrapper>
    );
  }
}

export default CovidCases;
