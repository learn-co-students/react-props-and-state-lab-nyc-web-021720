import React from 'react'
import PropTypes  from 'prop-types'
import Pet from './Pet'

class PetBrowser extends React.Component {

  // displayPets=()=>{
  //   return this.props.pets.map((pet,index)=>{
  //       return <div key={index}> {pet} </div>
  //   })
  // }

  render() {
    const {pets,  onAdoptPet} = this.props
    console.log(onAdoptPet)

    return <div className="ui cards">
      {pets.length > 0 && pets.map(pet => <Pet key={pet.id} pet= {pet} onAdoptPet={onAdoptPet} />)}
      </div>
  }
}

PetBrowser.propTypes = {
  pets: PropTypes.array.isRequired,
  onAdoptPet: PropTypes.func.isRequired
}

export default PetBrowser
