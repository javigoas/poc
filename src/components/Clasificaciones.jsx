import React, { useState } from 'react'
import FlagContext from '../contexts/FlagContext';
import styled from 'styled-components';
import { Table, Tag, Select } from 'antd';

const { Column } = Table;

const dataClasif = [
        {
          grupo: 1,
          nombre: "Mario Ayudarte",
          partidosJugados: 7,
          partidosGanados: 6,
          partidosPerdidos: 1,
          setsAFavor: 12,
          setsEnContra: 3,
          puntos: 19,
          tags: ['sube']
        },{
          grupo: 1,
          nombre: "Ricardo Solares",
          partidosJugados: 6,
          partidosGanados: 6,
          partidosPerdidos: 0,
          setsAFavor: 12,
          setsEnContra: 0,
          puntos: 18,
          tags: ['sube']
        },{
          grupo: 1,
          nombre: "Enrique Moreno",
          partidosJugados: 6,
          partidosGanados: 4,
          partidosPerdidos: 2,
          setsAFavor: 8,
          setsEnContra: 5,
          puntos: 14,
          tags: ['clasifica']
        },
        {
          grupo: 1,
          nombre: "Alberto Ariza",
          partidosJugados: 7,
          partidosGanados: 3,
          partidosPerdidos: 4,
          setsAFavor: 9,
          setsEnContra: 9,
          puntos: 13,
          tags: ['clasifica']
        },
        {
          grupo: 1,
          nombre: "Alejandro Molina",
          partidosJugados: 6,
          partidosGanados: 3,
          partidosPerdidos: 3,
          setsAFavor: 6,
          setsEnContra: 7,
          puntos: 12,
          tags: []
        },
        {
          grupo: 1,
          nombre: "Felipe Garcia",
          partidosJugados: 6,
          partidosGanados: 2,
          partidosPerdidos: 4,
          setsAFavor: 4,
          setsEnContra: 8,
          puntos: 10,
          tags: []
        },
        {
          grupo: 1, 
          nombre: "Mario Zumaquero",
          partidosJugados: 6,
          partidosGanados: 1,
          partidosPerdidos: 5,
          setsAFavor: 3,
          setsEnContra: 10,
          puntos: 8,
          tags: ['baja']
        },
        {
          grupo: 1,
          nombre: "Javier Godino",
          partidosJugados: 6,
          partidosGanados: 0,
          partidosPerdidos: 6,
          setsAFavor: 0,
          setsEnContra: 12,
          puntos: 6,
          tags: ['baja']
        },{
          grupo: 2,
          nombre: "Pedro Caro",
          partidosJugados: 7,
          partidosGanados: 6,
          partidosPerdidos: 1,
          setsAFavor: 12,
          setsEnContra: 3,
          puntos: 19,
          tags: ['sube']
        },{
          grupo: 2,
          nombre: "Jose Gomez",
          partidosJugados: 6,
          partidosGanados: 6,
          partidosPerdidos: 0,
          setsAFavor: 12,
          setsEnContra: 0,
          puntos: 18,
          tags: ['sube']
        },{
          grupo: 2,
          nombre: "Tete Moreno",
          partidosJugados: 6,
          partidosGanados: 4,
          partidosPerdidos: 2,
          setsAFavor: 8,
          setsEnContra: 5,
          puntos: 14,
          tags: ['clasifica']
        },
        {
          grupo: 2,
          nombre: "Luca Modric",
          partidosJugados: 7,
          partidosGanados: 3,
          partidosPerdidos: 4,
          setsAFavor: 9,
          setsEnContra: 9,
          puntos: 13,
          tags: ['clasifica']
        },
        {
          grupo: 2,
          nombre: "Arda Guller",
          partidosJugados: 6,
          partidosGanados: 3,
          partidosPerdidos: 3,
          setsAFavor: 6,
          setsEnContra: 7,
          puntos: 12,
          tags: []
        },
        {
          grupo: 2,
          nombre: "Fernando Caro",
          partidosJugados: 6,
          partidosGanados: 2,
          partidosPerdidos: 4,
          setsAFavor: 4,
          setsEnContra: 8,
          puntos: 10,
          tags: []
        },
        {
          grupo: 2,
          nombre: "Manu Prieto",
          partidosJugados: 6,
          partidosGanados: 1,
          partidosPerdidos: 5,
          setsAFavor: 3,
          setsEnContra: 10,
          puntos: 8,
          tags: ['baja']
        },
        {
          grupo: 2,
          nombre: "Jose San",
          partidosJugados: 6,
          partidosGanados: 0,
          partidosPerdidos: 6,
          setsAFavor: 0,
          setsEnContra: 12,
          puntos: 6,
          tags: ['baja']
        },{
          grupo: 3,
          nombre: "Take Kubo",
          partidosJugados: 7,
          partidosGanados: 6,
          partidosPerdidos: 1,
          setsAFavor: 12,
          setsEnContra: 3,
          puntos: 19,
          tags: ['sube']
        },{
          grupo: 3,
          nombre: "Pepe Martin",
          partidosJugados: 6,
          partidosGanados: 6,
          partidosPerdidos: 0,
          setsAFavor: 12,
          setsEnContra: 0,
          puntos: 18,
          tags: ['sube']
        },{
          grupo: 3,
          nombre: "Fran Moreno",
          partidosJugados: 6,
          partidosGanados: 4,
          partidosPerdidos: 2,
          setsAFavor: 8,
          setsEnContra: 5,
          puntos: 14,
          tags: ['clasifica']
        },
        {
          grupo: 3,
          nombre: "Luis Cruz",
          partidosJugados: 7,
          partidosGanados: 3,
          partidosPerdidos: 4,
          setsAFavor: 9,
          setsEnContra: 9,
          puntos: 13,
          tags: ['clasifica']
        },
        {
          grupo: 3,
          nombre: "Miguel Cervantes",
          partidosJugados: 6,
          partidosGanados: 3,
          partidosPerdidos: 3,
          setsAFavor: 6,
          setsEnContra: 7,
          puntos: 12,
          tags: []
        },
        {
          grupo: 3,
          nombre: "Felipe Sesto",
          partidosJugados: 6,
          partidosGanados: 2,
          partidosPerdidos: 4,
          setsAFavor: 4,
          setsEnContra: 8,
          puntos: 10,
          tags: []
        },
        {
          grupo: 3,
          nombre: "Camilo Cuarto",
          partidosJugados: 6,
          partidosGanados: 1,
          partidosPerdidos: 5,
          setsAFavor: 3,
          setsEnContra: 10,
          puntos: 8,
          tags: ['baja']
        },
        {
          grupo: 3,
          nombre: "Tomas Contreras",
          partidosJugados: 6,
          partidosGanados: 0,
          partidosPerdidos: 6,
          setsAFavor: 0,
          setsEnContra: 12,
          puntos: 6,
          tags: ['baja']
        }
    
    ]

const Clasificaciones = () => { 
  const [selectedLiga, setSelectedLiga] = useState(1); 
  
  const labelRender = (props) => {
    const { label, value } = props;
    if (label) {
      const valorNumerico = parseInt(value.split(" ")[1]);
      setSelectedLiga(valorNumerico);
      return value;
    }
    return <span>Selecciona tu liga</span>;
  };
  
const uniqueGroups = [...new Set(dataClasif.map(item => item.grupo))]

const options = uniqueGroups.map((value, index) => ({
  label: `Grupo ${index + 1}`,
  value: `Grupo ${index + 1}`,
}));

const jsonObject = JSON.stringify(options);

  const userLoged = FlagContext;
  console.log("UserLogged", userLoged)
    return (
      <ClasifWraper>        
        <ContainerDropdownDiv>
          <h4>Selecciona tu grupo</h4>
          <ContainerSelect>
            <Select 
              labelRender={labelRender}
              defaultValue="Grupo 1"
              style={{
                width: '100%',
              }}
              options={options}
            />
          </ContainerSelect>
        </ContainerDropdownDiv>

        <Table dataSource={dataClasif.filter(item => item.grupo===selectedLiga)} pagination="false">         
          <Column title="Nombre" dataIndex="nombre" key="nombre" />
          <Column title="Jugados" dataIndex="partidosJugados" key="partidosJugados" />
          <Column title="Ganados" dataIndex="partidosGanados" key="partidosGanados" />
          <Column title="Perdidos" dataIndex="partidosPerdidos" key="partidosPerdidos" />
          <Column title="Sets Favor" dataIndex="setsAFavor" key="setsAFavor" />
          <Column title="Sets Contra" dataIndex="setsEnContra" key="setsEnContra" />
          <Column title="Puntos" dataIndex="puntos" key="puntos" />
          <Column
            title="Estado"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green';
                  if (tag === 'baja') {
                    color = 'volcano';
                  }
                  return (
                    <Tag color={color} key={tag}>
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            )}
          />          
        </Table>
      </ClasifWraper>
    )
  }


export default Clasificaciones

const ClasifWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em;
`
const ContainerDropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
`

const ContainerSelect = styled.div`
  width: fit-content;
`