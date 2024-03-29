import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 19px;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`

const ErrorBox = styled.div`
  position: relative;
  width: 100%;
`

const ErrorMessage = styled.span`
  position: absolute;
  width: 300px;
  color: #cc0000;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`

export default {
  Container,
  Label,
  LabelContainer,
  ErrorBox,
  ErrorMessage,
}
