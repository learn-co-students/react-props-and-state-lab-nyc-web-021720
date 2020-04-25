import React from 'react'
import PropTypes from 'prop-types'

const Filters = ({onChangeType, onFindPetsClick}) => {
  return (
    <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field" >
          <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
        </div>
      </div>
  )
}

// class Filters extends React.Component {
//   render() {
//     const {onChangeType,onFindPetsClick}= this.props
//     return (
//       <div className="ui form">
//         <h3>Animal type</h3>
//         <div className="field">
//           <select name="type" id="type" onChange={onChangeType}>
//             <option value="all">All</option>
//             <option value="cat">Cats</option>
//             <option value="dog">Dogs</option>
//             <option value="micropig">Micropigs</option>
//           </select>
//         </div>

//         <div className="field" >
//           <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
//         </div>
//       </div>
//     )
//   }
// }

Filters.propTypes={
  onChangeType: PropTypes.func.isRequired,
  onFindPetsClick: PropTypes.func.isRequired
}



export default Filters
