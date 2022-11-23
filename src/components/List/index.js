
import { useState, useEffect } from 'react';
import axios from "axios";

import {
  Wrapper,
  Title,
  SubTitle,
  WrapperContent,
  WrapperContentTitles,
  ContentTitles,
  ContentRanking,
  ContentName,
  ContentScore,
  WrapperContentResponse
} from './styles'


const List = (
  ) => {

    //const STAGING_ENDPOINT = "https://sheet.best/api/sheets/bbdaf862-8fcb-4bff-b28c-b2f6f23a31be"
    const PRODUCTION_ENDPOINT ="https://sheet.best/api/sheets/2552b3dc-041c-4a3e-a378-4b34cd9f2261"

    const [participantInfos, setParticipantInfos] = useState();

    const getParticipantInfos = async () => {
      await axios.get(PRODUCTION_ENDPOINT)
      .then(function (response) {
        setParticipantInfos(response.data)
        
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  

  useEffect(() => {
    getParticipantInfos();
  }, [setParticipantInfos]);

  console.log(participantInfos)

  return (
    <Wrapper>
      <Title>Tabela de classificação</Title>
      <SubTitle>Tabela atualizada de acordo com o resultado das partidas</SubTitle>
      <WrapperContent>
        <WrapperContentTitles>
          <ContentTitles>Posição</ContentTitles>
          <ContentTitles>Nome</ContentTitles>
          <ContentTitles>Pontuação</ContentTitles>
        </WrapperContentTitles>
        
        {participantInfos?.map( ({ranking, name,score}, index) => {
          return(
            <WrapperContentResponse key={`line${index}`}>
              <ContentRanking>{ranking}</ContentRanking>
              <ContentName>{name}</ContentName>
              <ContentScore>{score}</ContentScore>
            </WrapperContentResponse>
          )
        })}
      
      
      </WrapperContent>
    </Wrapper>
  )
}


export default List
