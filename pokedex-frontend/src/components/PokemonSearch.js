import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { getPokemonDetails } from '../services/pokemonApi'

export default function PokemonSearch() {
  const [detail, setDetail] = useState(null)
  const [query, setQuery] = useState('')
  const [submit, setSubmit] = useState(false)

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    setSubmit(true)
  }

  useEffect(() => {
    let mounted = true;
    if (mounted && submit) {
      getPokemonDetails(query)
        .then(pokemonDetail => {
          if (mounted) {
            setDetail(pokemonDetail)
          }
        })
    }

    return () => {
      mounted = false
      setSubmit(false)
    }
  }, [query, submit])

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='PokemonSearch'>
              <Form.Control type="text" placeholder='Qual Pokemon você deseja procurar?' onChange={handleChange} value={query} />
            </Form.Group>
            <Button variant="primary" type="submit">Procurar</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}
