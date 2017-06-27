import React from 'react';
import Select from './selectInput.js';
import Radio from './radioInput.js';

class NewBus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: {
                "vin": {
                    "label": "VIN",
                    "type": "text"
                },
                "contractor": {
                    "label": "Contractor",
                    "type": "select",
                    "options": {
                        "1HVBRAAM31A916196": "1HVBRAAM31A916196",
                        "1HVBBAAN8YH336389": "1HVBBAAN8YH336389",
                        "1GBJG31U471250868": "1GBJG31U471250868",
                        "4UZAAXAK72CJ40487": "4UZAAXAK72CJ40487",
                        "4UZ6CFFC3YCF64921": "4UZ6CFFC3YCF64921",
                        "4DRBUAAN38B642964": "4DRBUAAN38B642964",
                        "4DRBUSKL29A675223": "4DRBUSKL29A675223",
                        "4UZAAWDD77CX73151": "4UZAAWDD77CX73151",
                        "1T88N3B2321115675": "1T88N3B2321115675",
                        "1HVBRAAN31H366583": "1HVBRAAN31H366583",
                        "1T88N3B2X21115642": "1T88N3B2X21115642"
                    }
                },
                "tagNumber": {
                    "label": "Tag Number",
                    "type": "text"
                },
                "inServiceDate": {
                    "label": "In Service Date",
                    "type": "text"
                },
                "modelYear": {
                    "label": "Model Year",
                    "type": "text"
                },
                "busType": {
                    "label": "Bus Type",
                    "type": "select",
                    "options": {
                        "Ford": "Ford",
                        "Toyota": "Toyota",
                        "Mac": "Mac"
                    }
                },
                "bodyBuildDate": {
                    "label": "Body Build Date",
                    "type": "text"
                },
                "lastInspectionDate": {
                    "label": "Last Inspection Date",
                    "type": "text"
                },
                "lastInspectionMileag": {
                    "label": "Last Inspection Mileage",
                    "type": "text"
                },
                "makeOfChassis": {
                    "label": "Make of Chassis",
                    "type": "select",
                    "options": {
                        "Ford": "Ford",
                        "Toyota": "Toyota",
                        "Mac": "Mac"
                    }
                },
                "makeOfBody": {
                    "label": "Make of Body",
                    "type": "select",
                    "options": {
                        "Ford": "Ford",
                        "Toyota": "Toyota",
                        "Mac": "Mac"
                    }
                },
                "brakeSystem": {
                    "label": "Brake System",
                    "type": "select",
                    "options": {
                        "Ford": "Ford",
                        "Toyota": "Toyota",
                        "Mac": "Mac"
                    }
                },
                "fuel": {
                    "label": "Fuel",
                    "type": "select",
                    "options": {
                        "regular": "regular",
                        "diesel": "diesel"
                    }
                },
                "airCondioning": {
                    "label": "Air Condioning",
                    "type": "radio",
                    "options": {
                        "yes": "yes",
                        "no": "no"
                    }
                },
                "lift": {
                    "label": "Lift",
                    "type": "radio",
                    "options": {
                        "yes": "yes", 
                        "no": "no"
                    }
                },
                "wheelchairSpaces": {
                    "label": "Wheelchair Spaces",
                    "type": "number"
                },
                "seatingCapacity": {
                    "label": "Seating Capacity",
                    "type": "number"
                }
            }
        }
    }

    buildForm() {
        var object = this.state.fields;
        var fields = Object.keys(object).map((keyName, keyIndex) => {
            if(object[keyName].type == "text" || object[keyName].type == "number")
                return (
                    <div className="formGroup" key={keyIndex}>
                        <label>
                            {object[keyName].label}:
                        </label>
                        <input type={object[keyName].type} />
                    </div>
                );
            if(object[keyName].type == "select")
                return (
                    <div className="formGroup" key={keyIndex}>
                        <label>
                            {object[keyName].label}:
                        </label>
                        <Select options={object[keyName].options} />
                    </div>
                );
            if(object[keyName].type == "radio")
                return (
                    <div className="formGroup" key={keyIndex}>
                        <label>
                            {object[keyName].label}:
                        </label>
                        <Radio name={keyName} options={object[keyName].options} />
                    </div>
                );
        });
        return (
            <div>
                {fields}
            </div>
        )
    }

    render() {
        let fields = this.buildForm();
        if(this.state) {
            return (
                <div>
                    {fields}
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

export default NewBus;