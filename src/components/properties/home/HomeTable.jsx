import React from 'react';
import {Component} from 'react';

export default class HomeTable extends Component {


    constructor(props) {
        super(props);


    }

    render() {

        return (
            <React.Fragment>
                <div className="item-border-home">
                    {this.props.title && <div className={"title " + this.props.titleClass}>
                        {this.props.title}
                    </div>}
                    <div className="sub-item">

                        <table>
                            <tbody>
                            {
                                this.props.data.map((item, index) => {
                                    return <tr key={index + new Date().getTime()}>
                                        <td className="left-item">{item.leftItem}</td>
                                        <td className="right-item">{item.rightItem}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

