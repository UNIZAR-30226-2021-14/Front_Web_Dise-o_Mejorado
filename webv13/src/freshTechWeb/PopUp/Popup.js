import React from 'react'
import {Button,ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
 
class Popup extends React.Component {
    constructor (props) {
        super()
    }
   
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}}>
                <div className="titulo">{this.props.text}</div>
            </ModalHeader>
            <ModalBody>
                <div className="popupin">
                  {this.props.cuerpo}
                </div>
            </ModalBody>
          </div>
        </div>
      );
    }
  }

Popup.propTypes = {
    //text:PropTypes.string.isRequired, //esto hace que name no sea opcional
    //closePopup:PropTypes.func,
    cuerpo:PropTypes.object.isRequired,
    //eliminada:PropTypes.bool.isRequired,
  }
  export default Popup
  

  