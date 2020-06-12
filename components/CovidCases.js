import React from 'react';
import * as V from 'victory';
import { VictoryPie, VictoryLabel, VictoryTheme } from 'victory';
import styles from 'styled-components';

const PieWrapper = styles.div`
  width: 100%;
  height: 300px;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid green;
`;

const CasesWrapper = styles.div`
  width: 100%;
  background: white;
  box-shadow: 4px 4px 16px #455B6314;
  margin: 0 auto;
  border: 1px solid red;
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
    <CasesWrapper>
      <PieWrapper>
        <svg
          viewBox="0 0 270 270"
          style={{ padding: '16px', margin: '0 auto' }}
        >
          <VictoryPie
            standalone={false}
            width={240}
            height={240}
            data={data}
            innerRadius={85}
            labelRadius={95}
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
            x={120}
            y={120}
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
    </CasesWrapper>
  );
}
