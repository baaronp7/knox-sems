import React from 'react';

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options,
            name: this.props.name
        }
    }

    buildRadios() {
        var object = this.state.options;
        var radios = Object.keys(object).map((keyName, keyIndex) => {
            return (
                <div key={keyIndex}>
                    <input type="radio" name={this.state.name} value={object[keyName]}/> {object[keyName]}
                </div>
            );
        });
        return (
            <div>
            {radios}
            </div>
        )
    }

    render() {
        let radios = this.buildRadios();
        return (
            <div>
                {radios}
            </div>
        )
    }
}

export default Radio;