import React from 'react'
import styled from 'styled-components'
import { cardBottomNumberStyle } from '../../../css/card'

const CardNumberContainer = styled.div`
  ${cardBottomNumberStyle}
  padding: 0px 24px;
`

const CardTextContainer = React.memo(styled.div`
  flex: 1 1 0px;
`)

export default { CardNumberContainer, CardTextContainer }
