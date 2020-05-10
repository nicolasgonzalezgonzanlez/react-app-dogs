import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterRace } from '../../core/Race/actions';
import './index.css';

function NavBar(props) {

  const searchRef = useRef();

  const query = (event) => {
    if (event.key == 'Enter' && searchRef.current.value !== "") {
      props.filterRace(searchRef.current.value)
      searchRef.current.value = ""
    }
  };

  return (
    <div className="navbar-menu flex-container-column">
      <div className="navbar-start flex-item-column">
        <Link className="a" to="/">
            <span>Razas de perros</span>
        </Link>
      </div>
      {props.viewSearch === true &&
        <div className="navbar-end flex-item-column">
          <div className="navbar-item">
            <input
              className="input is-rounded"
              type="text"
              ref={searchRef}
              placeholder="¿Que raza buscas?"
              onKeyUp={query}
            />
          </div>
        </div>
      }
    </div>
  )
}

NavBar.propTypes = {
  race: PropTypes.string,
  viewSearch: PropTypes.bool,
  filterRace: PropTypes.func
}

const mapStateToProps = state => ({
  race: state.raceReducer.search,
  viewSearch: state.raceReducer.viewSearch
})

export default connect(mapStateToProps, {filterRace}) (NavBar);
