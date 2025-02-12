import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  makePets = () => {
    return this.props.pets.map(pet => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />)
  }

  render(){
    return <div className="ui cards">{this.makePets()}</div>
  }

  // render(props) {
  //   let filteredArray = this.props.pets.filter(petObj => petObj.type === this.props.filterType)
  //   let petArray = this.props.filterType === 'all' ? this.props.pets.map(petObj => <Pet key = {petObj.id} petInfo = {petObj} onClick = {this.props.onClick}/> ) : filteredArray.map(petObj => <Pet key = {petObj.id} petInfo = {petObj} onClick = {this.props.onClick}/>)
  //   return (
  //     <div className="ui cards">
  //       {petArray}
  //     </div> 
  //   )
  // }
}

export default PetBrowser
