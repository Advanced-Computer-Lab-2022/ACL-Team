import React, { Component } from 'react';

export default class Sign_Up extends Component {
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