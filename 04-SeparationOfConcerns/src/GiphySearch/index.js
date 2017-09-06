import React, { Component } from 'react';
import View from './View';
import loadData from './loadData';

export default class extends Component {
  state = {};
  load = this.load.bind(this);

  async load(...args) {
    try {
      this.setState({ loading: true, error: false });
      const data = await loadData(...args);
      this.setState({ loading: false, data });
    } catch (ex) {
      this.setState({ loading: false, error: true });
    }
  }

  render() {
    return (
      <View {...this.props} {...this.state} onLoad={this.load} />
    );
  }
}
