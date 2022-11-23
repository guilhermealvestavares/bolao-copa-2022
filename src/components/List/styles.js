import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 320px; 
  max-width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 36px;

  @media (min-width: 768px) {  
    width: 850px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin:0;
`

export const SubTitle = styled.p`
  font-size: 16px;
  color: grey;
  margin:0;
  padding-top: 12px;
`

export const WrapperContent = styled.div`
  width: 100%;
  margin-top: 36px;
 
`

export const WrapperContentTitles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around; 
`

export const ContentTitles = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const ContentRanking = styled.p`
  font-size: 16px;
  font-weight: bold;
  max-width: 12px;
  width: 100%;
`

export const ContentName = styled.p`
  font-size: 16px;
  font-weight: bold;
  max-width: 150px;
  width: 100%;
`

export const ContentScore = styled.p`
  font-size: 16px;
  font-weight: bold;
  max-width: 20px;
  width: 100%;
`

export const WrapperContentResponse = styled.div`
 border-radius: 5px;
  display: flex;
  width: 100%;
  justify-content: space-around; 
  padding: 0 12px 0 12px;

  &:nth-child(2n+2) {
    background-color: rgba(120, 19, 40, 0.2);
  }
`




