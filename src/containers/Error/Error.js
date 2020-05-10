import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './error.css'

const Error = (props) => {
  return (
  <>
    <div className="error-container">
      <div className="error-item">
        {props.error[0].view === true &&
          <div className="card-error">
            <span>{props.error[0].error}</span>
          </div>
        }
      </div>
    </div>
  </>
)
}

Error.propTypes = {
  error: PropTypes.array
}

const mapStateToProps = state => ({
  error: state.raceReducer.viewError
})

export default connect(mapStateToProps) (Error);
