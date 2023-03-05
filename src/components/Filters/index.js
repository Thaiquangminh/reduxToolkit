import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { search, filterByStatus, filterByPriority } from '../../redux/actions';
import filtersSlice from './filtersSlice';

const { Search } = Input;

export default function Filters() {
  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState([]);
  const dispatch = useDispatch();

  const handleGetSearchValue = (e) => {
    setSearchValue(e.target.value);
    dispatch(filtersSlice.actions.search(e.target.value));
  };

  const handleGetStatus = (e) => {
    setStatus(e.target.value);
    dispatch(filtersSlice.actions.filterStatus(e.target.value));
  };

  const handleGetPriority = (value) => {
    setPriority(value);
    dispatch(filtersSlice.actions.filterPriority(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          value={searchValue}
          placeholder="input search text"
          onChange={handleGetSearchValue}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleGetStatus} value={status}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          value={priority}
          onChange={handleGetPriority}
          style={{ width: '100%' }}>
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
