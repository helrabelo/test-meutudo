import React, { Component } from 'react';

export default class SectionHeader extends Component {
  render() {
    return (
      <div className="section-header">
        <span>{this.props.span}</span>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}
