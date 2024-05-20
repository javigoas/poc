import React, { Component } from 'react'
import { Avatar, List } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const customDiv = styled.div`
  z-index:1
`

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export class Home extends Component {
  static propTypes = {
    clicked: PropTypes.bool,
  }

  render() {
    
    return (
      <customDiv>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </customDiv>
    )
  }
}

export default Home