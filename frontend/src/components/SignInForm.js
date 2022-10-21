import React, { Component } from 'react';

export default class Sign_In extends Component {
    render() {
        return(
            <form>
                <label>
                    Name: 
                    <input type="text" name="name"/>
                </label>
            </form>
        )
    }
}