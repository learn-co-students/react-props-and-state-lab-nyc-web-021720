import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  //api fetch

  fetchPets = () => {
    fetch('/api/pets')
    .then(response => response.json())
    .then(pets => {
      this.setState ({pets}) 
    })
  }

  fetchType = () => {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(response => response.json())
    .then(pets => {
      this.setState ({pets}) 
    })
  }

  handleAdoptedClick = (id) => {
    let updatedPets = this.state.pets.map(pet => {
      if (pet.id === id) {
       return ({...pet, isAdopted: true})
      } else {
        return pet}
    })
    this.setState({pets: updatedPets})
  }

  onFilterChange = (event) => {
    this.setState ({filters: {type: event.target.value}})
  }

  findButton = () => {
    return this.state.filters.type === 'all' ? this.fetchPets() : this.fetchType()  
  }



  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters fetchPets={this.fetchPets} onFilterChange={this.onFilterChange} findButton={this.findButton}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} handleAdoptedClick={this.handleAdoptedClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
