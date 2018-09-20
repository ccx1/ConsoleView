import React from 'react';
import {Component} from 'react';
import {Select, Button, Table, Tag} from 'antd';
import './Location.less'

const Option = Select.Option;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Invite {record.name}</a>
      <a href="javascript:;">Delete</a>
    </span>
    ),
}];


export default class Location extends Component {


    constructor(props) {
        super(props);

    }


    render() {
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },{
            key: '4',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            key: '5',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            key: '6',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];

        return (
            <React.Fragment>
                <div className="home-page">
                    位置管理
                </div>
                <div className="content">
                    <div>
                        <div>
                            <Select defaultValue="lucy" className="select-filter">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                            <Select defaultValue="lucy" className="select-filter">
                                <Option value="lucy">Lucy</Option>
                            </Select>
                            <Select defaultValue="lucy" className="select-filter">
                                <Option value="lucy">Lucy</Option>
                            </Select>
                            <Button type={"primary"}>筛选</Button>

                        </div>

                        <Button className="create-button" type={"primary"}>创建应用</Button>

                    </div>

                    <div>

                        <Table columns={columns} dataSource={data}/>

                    </div>
                </div>

            </React.Fragment>

        );
    }
}

