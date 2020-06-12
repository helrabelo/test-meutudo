import React from 'react';
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';
import styles from 'styled-components';

const PieWrapper = styles.div`
  width: 300px;
  height: 300px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 20px auto;
`;

const CasesWrapper = styles.div`
  width: 300px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 20px auto;
`;

const CasesList = styles.ul`
`;

const CasesListItem = styles.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 24px;
  text-align: left;


`;

const StatusItem = styles.span`
  width: 8px;
  height: 8px;
  border-radius: 3px;
  display: block;
  background: green;
`;

const ItemTitle = styles.p`
`;

const ItemTotal = styles.h3`
`;

const StatsWrapper = styles.div`
  width: 300px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 20px auto;
  display: flex;
  justify-content: space-between`;

export default function CovidCases() {
  const data = [
    { x: '26%', y: 26 },
    { x: '63%', y: 63 },
    { x: '11%', y: 11 },
  ];

  return (
    <>
      <PieWrapper>
        <svg viewBox="0 0 300 300">
          <VictoryPie
            standalone={false}
            width={300}
            height={300}
            data={data}
            innerRadius={120}
            labelRadius={130}
            startAngle={-90}
            endAngle={270}
            colorScale={['#55E13A', '#FFC259', '#FF5959']}
            style={{
              labels: { fontSize: 20, fill: 'black' },
            }}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 40, fontFamily: 'Roboto' }}
            x={150}
            y={150}
            text="9255"
          />
        </svg>
      </PieWrapper>
      <CasesWrapper>
        <CasesList>
          <CasesListItem>
            <StatusItem></StatusItem>
            <ItemTitle>Active Cases</ItemTitle>
            <ItemTotal>6000</ItemTotal>
          </CasesListItem>
          <CasesListItem>
            <StatusItem></StatusItem>
            <ItemTitle>Discharge</ItemTitle>
            <ItemTotal>2500</ItemTotal>
          </CasesListItem>
          <CasesListItem>
            <StatusItem></StatusItem>
            <ItemTitle>Deaths</ItemTitle>
            <ItemTotal>755</ItemTotal>
          </CasesListItem>
        </CasesList>
      </CasesWrapper>
      <StatsWrapper>
        <p>Male</p>
        <p>Female</p>
        <p>Children</p>
      </StatsWrapper>
    </>
  );
}
