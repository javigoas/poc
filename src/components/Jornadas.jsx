import React, { useState } from 'react'
import styled from 'styled-components';
import { Select, Table, Tag } from 'antd';
const CustomJorDiv = styled.div`
  z-index:-1
`

const Jornadas = () =>  {
   
  const columns = [
    {
      title: 'Jugador Local',
      dataIndex: 'jugador1',
      key: 'jugador1',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Jugador Visitante',
      dataIndex: 'jugador2',
      key: 'jugador2',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Set 1',
      dataIndex: 'set1',
      key: 'set1',
    },
    {
      title: 'Set 2',
      dataIndex: 'set2',
      key: 'set2',
    },
    {
      title: 'Set 3',
      key: 'set3',
      dataIndex: 'set3',      
    },
  ];

  const data = [
    {
      grupo: 1,
      jornada: 1,
      key: '1',
      jugador1: 'Mario Zumaquero',
      jugador2: 'Ale Molina',
      set1: '6-4',
      set2: '3-6',
      set3: '7-6',
    },
    {
      grupo: 1,
      jornada: 1,
      key: '2',
      jugador1: 'Ricardo Soares',
      jugador2: 'Javi Godino',
      set1: '6-4',
      set2: '5-6',
      set3: '7-6',
    },
    {
      grupo: 1,
      jornada: 1,
      key: '3',
      jugador1: 'Alberto Ariza',
      jugador2: 'Felipe Garcia',
      set1: '6-4',
      set2: '3-6',
      set3: '4-6',
    },
    {
      grupo: 1,
      jornada: 1,
      key: '4',
      jugador1: 'Quique Moreno',
      jugador2: 'Mario Ayudarte',
      set1: '6-2',
      set2: '2-6',
      set3: '7-6',
    },
    {
      grupo: 1,
      jornada: 2,
      key: '5',
      jugador1: 'Javi Godino',
      jugador2: 'Ale Molina',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 1,
      jornada: 2,
      key: '6',
      jugador1: 'Ricardo Soares',
      jugador2: 'Mario Zumaquero',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 1,
      jornada: 2,
      key: '7',
      jugador1: 'Alberto Ariza',
      jugador2: 'Mario Ayudarte',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 1,
      jornada: 2,
      key: '8',
      jugador1: 'Quique Moreno',
      jugador2: 'Felipe Garcia',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 2,
      jornada: 1,
      key: '9',
      jugador1: 'Alex Zverev',
      jugador2: 'Carlos Alcaraz',
      set1: '6-4',
      set2: '3-6',
      set3: '7-6',
    },
    {
      grupo: 2,
      jornada: 1,
      key: '10',
      jugador1: 'Roger Federer',
      jugador2: 'Rafa Nadal',
      set1: '6-4',
      set2: '3-6',
      set3: '7-6',
    },
    {
      grupo: 2,
      jornada: 1,
      key: '11',
      jugador1: 'Jannik Sinner',
      jugador2: 'Novak Djokovic',
      set1: '6-4',
      set2: '3-6',
      set3: '7-6',
    },
    {
      grupo: 2,
      jornada: 1,
      key: '12',
      jugador1: 'Daniil Medvedev',
      jugador2: 'Andrey Rublev',
      set1: '6-4',
      set2: '3-6',
      set3: '7-6',
    },
    {
      grupo: 2,
      jornada: 2,
      key: '13',
      jugador1: 'Rafa Nadal',
      jugador2: 'Carlos Alcaraz',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 2,
      jornada: 2,
      key: '14',
      jugador1: 'Roger Federer',
      jugador2: 'Alex Zverev',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 2,
      jornada: 2,
      key: '15',
      jugador1: 'Jannik Sinner',
      jugador2: 'Andrey Rublev',
      set1: '',
      set2: '',
      set3: '',
    },
    {
      grupo: 2,
      jornada: 2,
      key: '16',
      jugador1: 'Daniil Medvedev',
      jugador2: 'Novak Djokovic',
      set1: '',
      set2: '',
      set3: '',
    },
  ];

  const [selectedLiga, setSelectedLiga] = useState(1);

  const labelRender = (props) => {
    console.log(props)
    const { label, value } = props;
    if (label) {
      const valorNumerico = parseInt(value.split(" ")[1]);
      setSelectedLiga(valorNumerico);
      return value;
    }
    return <span>Selecciona tu liga</span>;
  };

  const uniqueGroups = [...new Set(data.map(item => item.grupo))]

  const options = uniqueGroups.map((value, index) => ({
    label: `Grupo ${index + 1}`,
    value: `Grupo ${index + 1}`,
  }));

  const dataByLiga = data.filter(item => item.grupo===selectedLiga)

  

  return (
    <>
      <CustomJorDiv>
        <ContainerDropdownDiv>
          <h4>Selecciona tu grupo</h4>
          <ContainerSelect>
            <Select
              labelRender={labelRender}
              defaultValue="Grupo 1"
              style={{
                width: '100%',
              }}
              options={options} />
          </ContainerSelect>
        </ContainerDropdownDiv>
      </CustomJorDiv>
      
      <Table columns={columns} dataSource={dataByLiga} />        
    </>

  )
}


export default Jornadas

const ContainerDropdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3em;
`

const ContainerSelect = styled.div`
  width: fit-content;
`

const ContainerPartido = styled.div`
  display: flex;
  flex-direction: column;
`

const ContainerJugador = styled.div`
  display: flex;

`