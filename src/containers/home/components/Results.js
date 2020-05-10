import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css'
import { viewError } from '../../../core/Race/actions';
import Error from '../../Error/Error'

function Results(props) {
  const [filter, setFilter] = useState(null);
  useEffect(
    () => {
      props.race.race.filter(name => {
        if (name === props.race.search) {
          setFilter(name)
        }
      })
      if (filter) {
        props.viewError([{
          error: 'No pudimos encontrar esa raza',
          view: true
        }])
        setTimeout(() => {
          props.viewError([{
            error: '',
            view: false
          }])
        }, 1000);
      }
  },
  [props.race.search]
  )

  return (
    <>
      <Error />
      {filter && (
        <div className="container-results">
          <div className="item-results">    
            <div className="divider"></div>
            <div className="notification cardHome">
              <div className="result">
                <p>{filter}</p>
                <Link className="a" to={`post/${filter}`}>
                  <button className="button is-primary is-rounded">Ver imagen</button>
                </Link>
              </div>
            </div>
            <div className="divider"></div>  
          </div>
        </div>
      )}
    </>
  );
}
Results.propTypes = {
  race: PropTypes.object,
  filter: PropTypes.array,
  viewError: PropTypes.func
}

const mapStateToProps = state => ({
  race: state.raceReducer
})

export default connect(mapStateToProps, {viewError}) (Results);
