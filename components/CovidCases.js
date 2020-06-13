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

const data = [
  { x: '26', y: 26 },
  { x: '63%', y: 63 },
  { x: '11%', y: 11 },
];

class CovidCases extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    confirmed: 'loading..',
    active: 'loading..',
    recovered: 'loading',
    deaths: 'loading',
    error: null,
  };

  async fetchData() {
    const response = await axios.get('https://api.covid19api.com/summary');

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

  componentDidUpdate() {
    console.log('Covidcases props: ' + this.props.country);
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
                data={data}
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
                text="9255"
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
                <ItemTotal>6000</ItemTotal>
              </CasesListItem>
              <CasesListItem>
                <StatusItem style={{ background: '#55E13A' }} />
                <ItemTitle>Discharge</ItemTitle>
                <ItemTotal>2500</ItemTotal>
              </CasesListItem>
              <CasesListItem>
                <StatusItem style={{ background: '#FF5959' }} />
                <ItemTitle>Deaths</ItemTitle>
                <ItemTotal>755</ItemTotal>
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
