import React, { Component } from 'react'
import { Avatar, List } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const data = [
  {
    title: 'Partido cerrado',
    description: 'Alberto Ariza jugara como local contra Mario Zumaquero el 15/06/24 a las 18:30 en Inacua',
    avatar: 8
  },
  {
    title: 'Partido jugado',
    description: 'Alex Molina vence por 6-2 6-4 a Felipe Garcia',
    avatar: 2
  },
  {
    title: 'Partido jugado',
    description: 'Mario Ayudarte vence por 6-3 6-3 a Enrique Moreno',
    avatar: 3
  },
  {
    title: 'Partido cerrado',
    description: 'Ricardo Soares jugara como local contra Javi Godino el 21/06/24 a las 18:30 en Inacua',
    avatar: 5
  },
];

const Home = () =>  {
  return (
    <CustomHomeDiv>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${item.avatar}`} />}
              title={<h3>{item.title}</h3>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </CustomHomeDiv>
  )
}

export default Home

const CustomHomeDiv = styled.div`
  padding-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  z-index:1
`