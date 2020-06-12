import React from 'react';
import styles from 'styled-components';

const Container = styles.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 0;
  `;

const Title = styles.h3`
  font-size: 20px;
  color: #78849E;
  text-align: left;
  width: 100%;
`;

const Symptom = styles.div`
  display: flex;
  max-height: 340px;
  margin: 10px 0;
  align-items: center;

  &:last-child {
    flex-direction: row-reverse;
  }
`;

const SymptomImage = styles.img`
  border-radius: 100px;
  width: 100%;
  height: 100%;
  padding: 10px;
  flex: 1;
`;

const SymptomDescription = styles.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  flex: 2;
`;

const SymptomTitle = styles.span`
  font-size: 16px;
  text-align: left;
  width: 100%;
  color: #454F63;
  font-weight: bold; 
  margin-bottom: 6px; 
`;

const SymptomDetail = styles.p`
  font-size: 12px;
  font-weight: 200;
  max-height: 60px;
  overflow-y: scroll;
`;

export default function CovidSymptoms() {
  return (
    <>
      <Container>
        <Title>Symptoms</Title>
        <Symptom>
          <SymptomImage src="../static/images/caugh.png" />
          <SymptomDescription>
            <SymptomTitle>Dry cough</SymptomTitle>
            <SymptomDetail>
              The cough to look out for is a new, continuous cough. This means
              coughing a lot for more than an hour, or having three or more
              coughing episodes in 24 hours. If you usually have a cough, it may
              be worse than usual.
            </SymptomDetail>
          </SymptomDescription>
        </Symptom>
        <Symptom>
          <SymptomImage src="../static/images/fever.png" />
          <SymptomDescription>
            <SymptomTitle>Fever</SymptomTitle>
            <SymptomDetail>
              You have a fever if your temperature is above 37.8C. This can make
              you feel warm, cold or shivery.
            </SymptomDetail>
          </SymptomDescription>
        </Symptom>
      </Container>
    </>
  );
}
