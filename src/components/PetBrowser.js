import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.map(pet => <Pet {...pet}key={pet.id} handleAdoptedClick={this.props.handleAdoptedClick}/>)}</div>
  }
}

export default PetBrowser
