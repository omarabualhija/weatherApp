import React, { Component } from 'react'

import "./all.css"
export default class Add extends Component {


    render() {

    
        return (
            <div className="addbox">
      
                <form onSubmit={this.props.handelform}>
              <input autoComplete="off" name="country" type="text" placeholder="add your country" ></input>
            <input autoComplete="off" name='city' type="text" placeholder="add your city" ></input>
            <input type="submit"/>
              </form> 
            </div>
        )
    }
}
