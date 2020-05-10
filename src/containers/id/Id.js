import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './id.css';
import icon from '../../assets/icon.png'
import { connect } from 'react-redux';
// importo la accion que necesito que mute
import { viewSearch } from '../../core/Race/actions';
import { apiGetImg } from '../../core/Race/thunks';

function Id(props) {

  useEffect(() => {
    props.apiGetImg(props.name.key)
    props.viewSearch(false)
  }, []);

  return (
    <>
      <div className="id-container mar card-id">
          <div className="id-item">
            <div className="media-left">
              {
                (props.image === "") 
                  ? <progress className="progress is-small is-primary" max="100">15%</progress> 
                  : <figure className="image image is-3by">
                      <img src={props.image} alt="imagen perro" className="img" />
                    </figure>
              }
            </div>
          </div>
          <div className="id-item">
            <div className="media-content">
              <div className="content  has-text-centered">
                <Link to="/">
                  <img src={icon} alt="icon" className="media-icon" />
                </Link>
                <h1 className="title has-text-white">{props.name.key}</h1>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

Id.propTypes = {
  apiGetImg: PropTypes.func,
  viewSearch: PropTypes.func
}

const mapStateToProps = state => ({
  image: state.raceReducer.image
})

export default connect(mapStateToProps, {apiGetImg, viewSearch}) (Id);
