// importando componente de cabeçalho
import Head from "next/head"

// utilizando o componente Menu
import Menu from "../components/Menu"


// utilizando o componente Rodape
import Rodape from "../components/Rodape"

// importando o botão do reactstrap
import { Button, Container, Jumbotron } from "reactstrap"

// importando a biblioteca para trabalhar com icones
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home"/>
        <meta name="author" content="Leandro Mello"/>
      </Head>

      <Menu></Menu>

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #000;
            color: #fed136;
            padding-top: 150px;
            padding-botton: 150px;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">{data.home.topTitulo}</h1>
          <p className="lead">{data.home.topSubtitulo}</p>
          <p>
            <a href={data.home.topLinkBtn} className="btn btn-outline-warning btn-lg">{data.home.topTextoBtn}</a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
        <style>
          {`.servicos{
              background-color: #fff;
              padding-top: 80px;
              padding-botton: 80px;
              margin-botton: 0rem !important;
          }.circulo{
              width: 140px;
              heigth: 140px;
              background-color: #fed136;
              font-size: 52px;
              color: #fff;
              padding-top: 4px;
          }.centralizar{
              margin: 0 auto !important;
              float: none !important;
          }`}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">{data.home.serTitulo}</h2>
            <p className="lead pb-4">{data.home.serSubtitulo}</p>
          </div>

          <div className="row">
            <div className="col-md-4" >
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.serUmIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.serUmTitulo}</h2>
              <p>{data.home.serUmDesc}</p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.serDoisIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.serDoisTitulo}</h2>
              <p>{data.home.serDoisDesc}</p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.home.serTresIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.home.serTresTitulo}</h2>
              <p>{data.home.serTresDesc}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Rodape></Rodape>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:8080/home`)
  const data = await response.json()
  return { props: { data } }
}

export default Home;