import React, { Component } from 'react'
import { UserConsumer } from '../Task03/context/contextData';
class Comp5 extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
        {
          (value) => {
            return(
              <div>
              <h1>Comp5 {value}</h1>
              </div>
            )
          }
        }
        </UserConsumer>
      </div>
    )
  }
}

export default Comp5;