import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import PokemonIcon from './PokemonIcon'

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <NavbarBrand href="#home">
            <PokemonIcon />
          </NavbarBrand>
        </Navbar>
      </Container>
    )
  }
}

