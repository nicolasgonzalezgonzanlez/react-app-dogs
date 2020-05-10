import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Results from './components/Results';
import './home.css';

// importo conect de react-redux, siempre que se use redux se importa conect (se utiliza en el export)
import { connect } from 'react-redux';
// importo la accion que necesito que mute
import { readRace, viewSearch } from '../../core/Race/actions';
import { apiGetList } from '../../core/Race/thunks';


function Home(props) {
  useEffect(() => {
    props.apiGetList()
    props.viewSearch(true)
  }, []);
  return (
    <>
      <Results />
      <div className="home-container">
        <div className="home-item">
            <div className="container-flex">
          {props.race && props.race.map((element, key)  => (
              <div className="flex-item" key={key}>
                <div className="home-item">
                  <div className="notification cardHome card">
                    <div className="item-card">
                      <p>{element}</p>
                      <Link className="a" to={`post/${element}`}>
                        <button className="button is-primary is-rounded">Ver imagen</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  )
}

Home.propTypes = {
  race: PropTypes.array,
  readRace: PropTypes.func,
  viewSearch: PropTypes.func,
  apiGetList: PropTypes.func
}

const mapStateToProps = state => ({
  race: state.raceReducer.race
})

export default connect(mapStateToProps, {readRace, viewSearch, apiGetList}) (Home);
