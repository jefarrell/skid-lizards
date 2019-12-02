import {React, Component} from 'react'
import ElementsInView from './ElementsInView.js';
import { GLOBAL_CONSTANTS } from './constants.js';

class Main extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.elementsInView = new ElementsInView(GLOBAL_CONSTANTS.CLASSES.TO_OBSERVE);
  }
  
  render() {
    return null;
  }
}

export default Main;
