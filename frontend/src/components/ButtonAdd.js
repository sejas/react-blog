/**
* Antonio Sejas
* antonio@sejas.es
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'

export default class ButtonAdd extends Component {

  static propTypes = {
    rotate: PropTypes.bool,
  }

  render() {
    const {onClick, rotate} = this.props
   return (
     <div className="button-add button" onClick={onClick}>
        <FaPlusCircle className={rotate?'rotate-btn-plus':'btn-plus'} width={45} height={45} />
     </div>
   );

  }
}
