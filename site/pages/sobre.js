// importando componente de cabeçalho
import Head from 'next/head'

// utilizando o componente Menu
import Menu from '../components/Menu'

// utilizando o componente Rodape
import Rodape from '../components/Rodape'

// importando o botão do reactstrap
import { Container, Jumbotron } from 'reactstrap'

function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name='description' content='Sobre' />
        <meta name='author' content='Leandro Mello' />
      </Head>

      <Menu></Menu>

      <Jumbotron fluid className='descr-top'>
        <style>
          {`.descr-top{
            background-color: #000;
            color: #fed136;
            padding-top: 100px;
            padding-botton: 50px;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className='text-center'>
          <h1 className='display-4'>Sobre a BW3 Consultoria</h1>
          <p className='lead'>A BW3 Consultoria foi criada para prestar serviços de qualidade, respeitando os padrões do mercado mundial em tecnologia.</p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="sobre">
        <style>
          {`.sobre{
            padding-top: 110px;
            padding-bottom: 110px;
            background-color: #fff;
            margin-botton: 0rem !important;
          }`}
        </style>
        <Container>
    
        </Container>
      </Jumbotron>
      <Rodape />
    </>
  )
}

export default Sobre;