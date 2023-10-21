import React, { Component } from 'react'
import { UserConsumer } from '../Task03/context/contextData';
import Comp4 from './Comp4';

 class Comp3 extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
        {
          (value) => {
            return(
              <div>
              <h1>Comp3 {value}</h1>
              <Comp4/>
              </div>
            )
          }
        }
        
        </UserConsumer>
        
      </div>
    )
  }
}

export default Comp3;
