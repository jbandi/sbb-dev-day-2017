import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    const query = ev.target.elements.query.value;
    this.props.onSearch(query);
  }

  componentDidMount() {
    const { onSearch, initialQuery } = this.props;
    if (initialQuery) {
      onSearch(initialQuery);
    }
  }

  render() {
    const { initialQuery } = this.props;
    return (
      <section>
        <form onSubmit={this.onSubmit}>
          <div>
            Enter a word or phrase:
            <input type="text" name="query" defaultValue={initialQuery} />
            <button type="submit">Search</button>
          </div>
          <br />
        </form>
      </section>
    );
  }
}
