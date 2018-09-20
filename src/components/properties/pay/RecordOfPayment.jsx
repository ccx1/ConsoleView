import React from 'react';
import {Component} from 'react';
import './RecordOfPayment.less'
import { Table } from 'antd';


const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}


export default class RecordOfPayment extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: []
        }
    }


    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };


    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return <React.Fragment>
            <div className="home-page">
                付款记录
            </div>
            <div className="page-item-pay">
                <p>1. 在您的收入达到起付金额（100元）时，就可以申请提现了</p>
                <p>2. xxxxx会在每月15日至30日对开发者上个自然月产生的收入进行付款，超过每月最后一天未收到分成可联系您的AM排查。</p>
                <p>3. 企业请开具增值税专用发票</p>
                <p>4. 不足100元时，将累计至账户余额，直至达到100元，系统会生成付款记录。</p>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

        </React.Fragment>;
    }
}

