import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NewBus from './newBus.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Test',
            navElements: {
                "newBus": {
                    "text": "Enter New Bus",
                    "active": true
                },
                "editBus": {
                    "text": "Edit Bus Information",
                    "active": false
                },
                "manageEquipment": {
                    "text": "Manage Equipment",
                    "active": false
                },
                "newMaintenance": {
                    "text": "Add a New Maintenance Record",
                    "active": false
                },
                "editMaintenanc": {
                    "text": "Edit Existing Maintenance Record",
                    "active": false
                },
                "runReports": {
                    "text": "Run Reports",
                    "active": false
                }
            },
            activePage: "newBus",
            authenticated: true
        }
    }

    navagation() {
        var object = this.state.navElements;
        var navagation = Object.keys(object).map((keyName, keyIndex) => {
            return (
                <button key={keyIndex} className="btn btn-default">{object[keyName].text}</button>
            );
        });
        return (
            <div>
                {navagation}
            </div>
        )
    }

    render() {
        let navagation = this.state.authenticated ? this.navagation() : '';
        if(this.state) {
            return (
                <div>
                    <div className="header col-xs-12">
                        <h1>School Bus Information System</h1>
                    </div>
                    <div className="navContainer col-sm-4 col-xs-12">
                        {navagation}
                    </div>
                    <div className="pageContainer col-sm-8 col-xs-12">
                        <NewBus />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading...</div>
            );
        }
    }
}

export default App;