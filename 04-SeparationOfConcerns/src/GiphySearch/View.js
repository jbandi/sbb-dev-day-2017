import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import Image from './Image';
import Loading from './Loading';
import Error from './Error';

const View = ({ 
  loading, error, data, initialQuery, onLoad,
  RenderSearchInput, RenderImage, RenderLoading, RenderError,
}) => (
  <div>
    <RenderSearchInput initialQuery={initialQuery} onSearch={onLoad} />
    <section>
      {do {
        if (loading) {
          <RenderLoading />
        } else if (error) {
          <RenderError error={error} />
        } else {
          <RenderImage src={data} />
        }
      }}
    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  initialQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  renderImage: PropTypes.func,
  renderLoading: PropTypes.func,
  renderError: PropTypes.func,
};

View.defaultProps = {
  RenderSearchInput: SearchInput,
  RenderImage: Image,
  RenderLoading: Loading,
  RenderError: Error,
};

export default View;
