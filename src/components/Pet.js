import React from 'react'
import PropTypes from 'prop-types'

class Pet extends React.Component {

  // handleClick = (e) => {
  //   e.preventDefault()
    
  //   const {pet,onAdoptPet} = this.props
  //   const {id} = pet

  //   onAdoptPet(id)
    

  //   console.log(`this is click ${pet.id}`)
  // }

  render() {
    const {pet, onAdoptPet} = this.props
    const {id, name, gender, type, age, weight, isAdopted} = pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender === "male" ? "♂ " : "♀ "}
            {name}
          </a>
          <div className="meta">
    <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age:{age}</p>
    <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? 
          (<button className="ui disabled button"> Already adopted</button>) :
        
          (<button className="ui primary button" onClick={ e => onAdoptPet(id)} >Adopt pet</button>)
          }

        </div>
      </div>
    )
  }
}

Pet.propTypes = {
  pet: PropTypes.object.isRequired,
  onAdoptPet: PropTypes.func.isRequired
}

export default Pet
