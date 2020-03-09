import React from "react"
import * as S from '../components/styles/variables/Typography'
import { Container, Row, Col } from 'react-grid-system'

import GlobalStyle from "../components/styles/variables/Globals"

export default () => 
<div>
  <GlobalStyle />
  <Container fluid>
    <Row gutterWidth="32">
      <Col sm={12} lg={4}><S.H1>Sparta 1</S.H1></Col>
      <Col sm={12} lg={4}><S.H1>Sparta 2</S.H1></Col>
      <Col sm={12} lg={4}><S.H1>Sparta 3</S.H1></Col>
    </Row>
  </Container>
</div>