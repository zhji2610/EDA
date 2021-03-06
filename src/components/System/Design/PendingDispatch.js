import React, { Component } from 'react';
import { Input, Form, Radio, Select, Col, Row, Button} from 'antd';
import PendingDispatchList from './PendingDispatchList';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;

class PendingDispatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeList: ['无锡', '西安', '上海', '北京'],
            searchKeyword: {}
        };
        this.handlePendingDispatchSearch = this.handlePendingDispatchSearch.bind(this);
        this.handlePendingDispatchReset = this.handlePendingDispatchReset.bind(this);
    }
    render() {

        const { form } = this.props;
        const { getFieldDecorator } = form;
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
        const formItemLayout2 = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
          },
        };
        return (
          <div>
            <Form onSubmit={this.handlePendingDispatchSearch} autoComplete="off">
              <Row gutter={24}>
                <Col span={6}>
                  <FormItem label="EDA设计单号" {...formItemLayout}>
                    {getFieldDecorator('designCode')(
                      <Input style={{width:"100%"}} placeholder="" />
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="文件名" {...formItemLayout}>
                    {getFieldDecorator('fileName')(
                      <Input style={{width:"100%"}} placeholder=""  />
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="客户单位简称" {...formItemLayout}>
                    {getFieldDecorator('customBbr')(
                      <Input style={{width:"100%"}} placeholder="" />
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
                  <FormItem label="客户联系人" {...formItemLayout}>
                    {getFieldDecorator('customContact')(
                      <Input style={{width:"100%"}} placeholder="" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col span={6}>
                  <FormItem label="设计联系销售" {...formItemLayout}>
                    {getFieldDecorator('sale')(
                      <Input style={{width:"100%"}} placeholder=""/>
                    )}
                  </FormItem>
                </Col>
                <Col span={6}>
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
                <Col span={11}>
                 <div style={{ overflow: 'hidden' }}>
                  <div style={{ float: 'right', marginBottom: 24 }}>
                  <Button type="danger" style={{ marginRight: 10}} onClick={this.handlePendingDispatchReset}>
                    重置
                  </Button>
                  <Button type="primary" htmlType="submit">
                    搜索
                  </Button>
                  </div>
                 </div>
                </Col>
              </Row>
            </Form>
            <PendingDispatchList searchkeyword={this.state.searchKeyword}/>
          </div>
        );
      }

      handlePendingDispatchSearch = (e) => {
        e.preventDefault();
        let keyword = this.props.form.getFieldsValue();
        this.setState({
          searchKeyword: keyword
        })
        console.log(keyword);
      }

      handlePendingDispatchReset = (e) => {
        this.props.form.setFields({"designCode":""})
        this.props.form.setFields({"fileName":""})
        this.props.form.setFields({"customBbr":""})
        this.props.form.setFields({"customContact":""})
        this.props.form.setFields({"sale":""})
        this.props.form.setFields({"area":""})
        this.setState({
          searchKeyword: {}
        })
      }
}

export default PendingDispatch = Form.create({})(PendingDispatch)