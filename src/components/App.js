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
  onChangeType = (event) => {
    this.setState({
      filters: {type: event.target.value}
    })
  }

  onFindPetsClick = ()=>{
    let petType = this.state.filters.type
    let fullUrl = ''
    if (petType === 'all'){
      fullUrl = '/api/pets'
    }
    else{
      fullUrl = '/api/pets?type=' + petType
    }
    // console.log(petType)
    // console.log(fullUrl)
    fetch(fullUrl)
      .then(res => res.json())
      .then(objects => {
        this.setState({
          pets: objects
        })
        // console.log(this.state.pets)
      })
  }

  onAdoptPet = (petId) =>{
    let adopted = this.state.pets.map(pet =>{
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets: adopted})
    // console.log(this.state)
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType = {this.onChangeType}
                onFindPetsClick = {this.onFindPetsClick} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets = {this.state.pets}
                onAdoptPet = {this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
