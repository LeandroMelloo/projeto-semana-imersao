import React, { useState } from 'react'

// importando componente de cabeçalho
import Head from 'next/head'

// utilizando o componente Menu
import Menu from '../components/Menu'

// utilizando o componente Rodape
import Rodape from '../components/Rodape'

// importando o botão do reactstrap
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Contato() {

  const [contato, setContato] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  })

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  })

  const onChangeInput = e => setContato({ ...contato, [e.target.name]: e.target.value })

  const sendMessage = async e => {
    e.preventDefault()
    setResponse({ formSave: true })

    try {
      const res = await fetch('http://localhost:8080/contato', {
        method: 'POST',
        body: JSON.stringify(contato),
        headers: { 'Content-Type': 'application/json' }
      })

      const responseEnv = await res.json()
      if (responseEnv.error) {
        setResponse({
          formSave: false,
          type: 'error',
          message: responseEnv.message
        })
      }
      setResponse({
        formSave: false,
        type: 'success',
        message: responseEnv.message
      })
    } catch (error) {
      setResponse({
        formSave: false,
        type: 'error',
        message: 'Não foi possível cadastrar seu contato, tente novamente mais tarde.'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name='description' content='Contato' />
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
          <h1 className='display-4'>Contato</h1>
          <p className='lead'>Formulario de contato</p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-contato">
        <style>
          {`.form-contato{
            padding-top: 80px;
            padding-bottom: 80px;
            background-color: #fff;
            margin-botton: 0rem !important;
          }`}
        </style>
        <Container>
          {response.type === 'error' ? <div className='alert alert-danger'>{response.message}</div> : ""}
          {response.type === 'success' ? <div className='alert alert-success'>{response.message}</div> : ""}
          <Form onSubmit={sendMessage}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" name="name" id="name" placeholder="Digite seu nome completo"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Digite seu e-mail"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="subject">Assunto</Label>
              <Input type="text" name="subject" id="subject" placeholder="Digite o assunto da messagem"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="content">Conteudo</Label>
              <Input type="textarea" name="content" id="content" placeholder="Digite o conteudo da messagem"
                onChange={onChangeInput}
              />
            </FormGroup>

            {response.formSave ? <Button type="submit" outline color="warning" className="button-enviar"
            disabled>Enviando...</Button> : 
            <Button type="submit" outline color="success" className="button-enviar">
              <style>
                {`.button-enviar{
                    margin-left: 0px;
                }`}
              </style>
              Enviar
            </Button>}

            <Button outline color="warning" className="button-voltar" href='http://localhost:3000'>
              <style>
                {`.button-voltar{
                    margin-left: 10px;
                }`}
              </style>
              Voltar
            </Button>
          </Form>
        </Container>
      </Jumbotron>
      <Rodape />
    </>
  )
}

export default Contato;