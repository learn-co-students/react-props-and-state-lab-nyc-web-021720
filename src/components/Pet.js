import React from 'react'



class Pet extends React.Component {
  
  render() {
    
    const {id, type, gender, age, weight, name, isAdopted} = this.props
  

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender === 'male' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age:{age}</p>
            <p>Weight:{weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.handleAdoptedClick(id)}className="ui primary button">Adopt pet</button>}
          
        </div>
      </div>
    )
  }
}

export default Pet
