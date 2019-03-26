import React, { Component } from 'react';

class NewTrader extends Component {

    handleFormSubmit = (event: Event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <button type="submit">Add new trader</button>
                </form>
            </div>
        );
    }
}

export default NewTrader;
