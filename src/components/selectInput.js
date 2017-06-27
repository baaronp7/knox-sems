import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: this.props.options
        }
    }

    buildSelect() {
        var object = this.state.options;
        var opts = Object.keys(object).map((keyName, keyIndex) => {
            return (
                <option name={keyName} value={object[keyName]}>{object[keyName]}</option>
            );
        });
        console.log(opts);
        return (
            <select>
                {opts}
            </select>
        )
    }

    render() {
        let select = this.buildSelect();
        console.log(select);
        return (
            <div>
                {select}
            </div>
        )
    }
}

export default Select;