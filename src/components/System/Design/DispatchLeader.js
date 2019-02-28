import React, { Component } from 'react';
import { Input, Form, Radio, Select, Col, Row, Button, Card, Table} from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

class DispatchLeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeList: ['无锡', '西安', '上海', '北京'],
            searchKeyword: {},
            data: []
        };
    }

    // checkRole = (rule, value, callback) => {
    //     if (value != '角色组') {
    //       callback();
    //       return;
    //     }
    //     callback('请选择角色!');
    //   }

    render() {
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
        }, {
            title: '级别',
            dataIndex: 'level',
        }, {
            title: '软件能力系数',
            dataIndex: 'software',
        }, {
            title: '部门',
            dataIndex: 'department',
        }, {
            title: '压力值',
            dataIndex: 'load',
        }, {
            title: '负责项目数量',
            dataIndex: 'project',
        }, ];

        const { form } = this.props;
        const {getFieldDecorator} = form;
        return (
            <div>
            <Form>
                <Row gutter={24}>
                 <Col span={10}>
                  <FormItem label="服务地区" {...formItemLayout}>
                    {getFieldDecorator('area')(
                      <Select placeholder="请选择" style={{ width: '100%' }}>
                      {this.state.placeList.map((value,index)=>{
                      return (<Option value={value} key={index}>{value}</Option>)
                    })}
                    </Select>
                    )}
                  </FormItem>
                 </Col>
                 <Col span={10}>
                  <FormItem label="设计部门" {...formItemLayout}>
                    {getFieldDecorator('dapartment')(
                      <Select placeholder="请选择" style={{ width: '100%' }}>
                      {this.state.placeList.map((value,index)=>{
                      return (<Option value={value} key={index}>{value}</Option>)
                    })}
                    </Select>
                    )}
                  </FormItem>
                 </Col>
                 <Col span={4}>
                 <div style={{ marginTop: '5px' }}>
                  <Button type="danger" style={{ }} onClick={this.handlePendingDispatchReset}>
                    重置
                  </Button>
                 </div>
                 </Col>
                </Row>
                <Row gutter={24}>
                 <Col span={10}>
                  <FormItem label="服务模式" {...formItemLayout}>
                    {getFieldDecorator('serviceMode')(
                      <Select placeholder="请选择" style={{ width: '100%' }}>
                      {this.state.placeList.map((value,index)=>{
                      return (<Option value={value} key={index}>{value}</Option>)
                    })}
                    </Select>
                    )}
                  </FormItem>
                 </Col>
                 <Col span={10}>
                  <FormItem label="外协单位" {...formItemLayout}>
                    {getFieldDecorator('company')(
                      <Select placeholder="请选择" style={{ width: '100%' }}>
                      {this.state.placeList.map((value,index)=>{
                      return (<Option value={value} key={index}>{value}</Option>)
                    })}
                    </Select>
                    )}
                  </FormItem>
                 </Col>
                 <Col span={4}>
                  <div style={{ marginTop: '5px' }}>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                 </div>
                 </Col>
                </Row>
            </Form>
            <hr />
            <span>项目负责人推荐表 (推荐建议：4级)</span>
            <hr />
            <Card bordered={false}>
                <Table columns={columns} dataSource={this.state.data} pagination={false}/>
            </Card>
            </div>
        )
    };
}

export default DispatchLeader = Form.create()(DispatchLeader);
