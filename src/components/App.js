import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  onChangeType = (e) => {
    this.setState(
      {
        filters: { type: e.target.value },
      },
      () => console.log(this.state.filters.type)
    );
  };

  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
        .then((res) => res.json())
        .then((data) => {
          this.setState(
            {
              pets: data,
            },
            () => console.log(this.state.pets)
          );
        });
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState(
            {
              pets: data,
            },
            () => console.log(this.state.pets)
          );
        });
    }
  };

  onAdoptPet = id => {
    const petsArr = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets: petsArr });
  };

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
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
