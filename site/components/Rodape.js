import React from 'react'
import { Container, Jumbotron } from 'reactstrap'

const Rodape = (props) => {
  return (
    <Jumbotron fluid className="rodape">
      <style>
        {`.rodape{
            background-color: #000;
            color: #fed136;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 0rem !important;
        }`}
      </style>
      <Container className="text-center">
        <h1 className="lead">@Direitos reservados BW3 Consultoria</h1>
      </Container>
    </Jumbotron>
  );
}

export default Rodape;
