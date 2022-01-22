import React from 'react'
import styled from 'styled-components'
import {
  cardBottomInfoStyle,
  cardBottomNumberStyle,
  cardBottomStyle,
  CardMiddleStyle,
  CardStyle,
  cardTextStyle,
  cardTopStyle,
  smallCardStyle,
  smallChipStyle,
} from '../../css/card'

const Card = styled.div<{ bgColor?: string; ableToModalOpen?: boolean }>`
  ${smallCardStyle}
  ${CardStyle}
  margin-bottom: 25px;
  ${({ bgColor }) => bgColor && { backgroundColor: bgColor }}
  ${({ ableToModalOpen }) => ableToModalOpen && { cursor: 'pointer' }}
`

const CardTop = styled.div`
  ${cardTopStyle}
`

const CardMiddle = React.memo(
  styled.div`
    ${CardMiddleStyle}
  `
)

const CardBottom = styled.div`
  ${cardBottomStyle}
`

const CardBottomNumber = styled.div`
  ${cardBottomNumberStyle}
`

const CardBottomInfo = styled.div`
  ${cardBottomInfoStyle}
`

const CardText = styled.span`
  ${cardTextStyle}
`

const CardSmallChip = styled.div`
  ${smallChipStyle}
`

export default {
  Card,
  CardTop,
  CardMiddle,
  CardBottom,
  CardBottomInfo,
  CardText,
  CardSmallChip,
  CardBottomNumber,
}