import React from 'react'
import Styled from './index.style'

const CardExpire = ({ month, year }: CardExpireProps) => (
  <Styled.CardExpireContainer>
    <Styled.CardTextContainer>
      <Styled.CardText>{month}</Styled.CardText>
      <Styled.CardText>/</Styled.CardText>
      <Styled.CardText>{year}</Styled.CardText>
    </Styled.CardTextContainer>
  </Styled.CardExpireContainer>
)

export default React.memo(CardExpire)

interface CardExpireProps {
  month: string
  year: string
}
