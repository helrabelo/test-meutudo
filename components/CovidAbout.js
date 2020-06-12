import React from 'react';
import styles from 'styled-components';

const Container = styles.div`
  margin: 20px 10px 10px 10px;  
  padding: 20px;
  background: white;
`;

const Row = styles.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #F4F4F6FD;
  margin: 10px 0;
  
  &:last-child{
    border-bottom: none;
  }
`;

const CoronaItem = styles.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;  
  margin-bottom: 0;
`;

const CoronaIcon = styles.img`
margin-bottom: 10px;`;

const CoronaTitle = styles.span`
  font-size: 13px;
  color: #3C4954;
`;

export default function CovidAbout() {
  return (
    <>
      <Container>
        <Row>
          <CoronaItem>
            <CoronaIcon src="/1.png" />
            <CoronaTitle>Use Sanitizer</CoronaTitle>
          </CoronaItem>
          <CoronaItem>
            <CoronaIcon src="/2.png" />
            <CoronaTitle>Stay Isolated</CoronaTitle>
          </CoronaItem>
          <CoronaItem>
            <CoronaIcon src="/3.png" />
            <CoronaTitle>Wear Mask</CoronaTitle>
          </CoronaItem>
        </Row>
        <Row>
          <CoronaItem>
            <CoronaIcon src="/4.png" />
            <CoronaTitle>Maintain Distance</CoronaTitle>
          </CoronaItem>
          <CoronaItem>
            <CoronaIcon src="/5.png" />
            <CoronaTitle>Health Checkup</CoronaTitle>
          </CoronaItem>
          <CoronaItem>
            <CoronaIcon src="/6.png" />
            <CoronaTitle>Follow Govt Rules</CoronaTitle>
          </CoronaItem>
        </Row>
      </Container>
    </>
  );
}
