import React from 'react';
import styles from 'styled-components';

const ImageItem = styles.img`
`;

export default function Image(props) {
  return <ImageItem src={props.source} />;
}
