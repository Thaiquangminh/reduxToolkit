import { Button, Col, Input, Row, Select, Tag } from 'antd';
import { useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newTodolist } from '../../redux/selector';
import Todo from '../Todo';
import todolistSlice from './todoSlice';

export default function TodoList() {
  const id = useId();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('Medium');

  // selector
  const todoList = useSelector(newTodolist);

  const handleGetName = (e) => {
    setName(e.target.value);
  };

  const handleGetPriority = (value) => {
    setPriority(value);
  };

  const handleAdd = () => {
    dispatch(
      todolistSlice.actions.addTodo({
        id: id,
        name: name,
        priority: priority,
        completed: false,
      })
    );
    setName('');
    setPriority('Medium');
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo, index) => {
          return (
            <Todo
              key={index}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
              id={id}></Todo>
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(e) => handleGetName(e)} />
          <Select defaultValue="Medium" onChange={handleGetPriority}>
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
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
