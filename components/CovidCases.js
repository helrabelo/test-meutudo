import React from 'react';
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';
import styles from 'styled-components';

const PieWrapper = styles.div`
  width: 100%;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 10px auto;
  padding: 0;
`;

const CasesWrapper = styles.div`
  width: 100%;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 10px auto;
`;

const CasesList = styles.ul`
  padding: 0;
`;

const CasesListItem = styles.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #455B6314;
  padding: 20px;
  &:last-child {
    border-bottom: none;
  } 


`;

const StatusItem = styles.span`
  max-width: 8px;
  height: 8px;
  border-radius: 3px;
  display: block;
  flex: 1;
  margin-right: 20px;
`;

const ItemTitle = styles.p`
  flex: 3;
  font-weight: bold;
`;

const ItemTotal = styles.h3`
  flex: 1;
  font-weight: normal;
  text-align: right;
`;

const StatsWrapper = styles.div`
  width: 300px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 20px auto;
  display: flex;
  justify-content: space-between`;

const Stat = styles.li`
`;

export default function CovidCases() {
  const data = [
    { x: '26%', y: 26 },
    { x: '63%', y: 63 },
    { x: '11%', y: 11 },
  ];

  return (
    <CasesWrapper>
      <PieWrapper>
        <svg
          viewBox="0 0 270 270"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            margin: '0 auto',
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
      <CasesWrapper>
        <CasesList>
          <CasesListItem>
            <StatusItem style={{ background: '#FFC259' }}></StatusItem>
            <ItemTitle>Active Cases</ItemTitle>
            <ItemTotal>6000</ItemTotal>
          </CasesListItem>
          <CasesListItem>
            <StatusItem style={{ background: '#55E13A' }}></StatusItem>
            <ItemTitle>Discharge</ItemTitle>
            <ItemTotal>2500</ItemTotal>
          </CasesListItem>
          <CasesListItem>
            <StatusItem style={{ background: '#FF5959' }}></StatusItem>
            <ItemTitle>Deaths</ItemTitle>
            <ItemTotal>755</ItemTotal>
          </CasesListItem>
        </CasesList>
      </CasesWrapper>
      <StatsWrapper>
        <Stat>Male</Stat>
        <Stat>Female</Stat>
        <Stat>Children</Stat>
      </StatsWrapper>
    </CasesWrapper>
  );
}
