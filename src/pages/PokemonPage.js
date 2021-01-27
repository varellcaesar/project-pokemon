import React, {Component} from 'react';
import {Modal} from 'antd';
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import PokemonPageContainer from '../components/PokemonPageContainer';

class PokemonPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myPokemon: [],
    };
  }

  componentDidMount = () => {
    const catchedHistory = localStorage.getItem('myPokemon')
    if(catchedHistory){
      this.setState({
        myPokemon: JSON.parse(catchedHistory)
      });
    } 
  }

  deleteMyPokemon = (id) => {
    console.log(id)
    const {myPokemon} = this.state
    this.setState({
      myPokemon: myPokemon.filter(item => item.id !== id)
    })
    localStorage.removeItem('myPokemon');
    localStorage.setItem('myPokemon', JSON.stringify(myPokemon.filter(item => item.id !== id)))
  }

  showConfirm = (index, name) => {
    Modal.confirm({

      title: 'Do you Want to delete this pokemon ?',
      content: 'Pokemin Name : ' + name,
      onOk: () => this.deleteMyPokemon(index),
      onCancel() {
          console.log('Cancel');
      },
    });
  }
  
  render(){
    return (
      <div>
        <PokemonPageContainer
            myPokemon={this.state.myPokemon}
            showConfirm={(index, name) => this.showConfirm(index, name)}
        />
      </div>
    );
  }
}

export default PokemonPage;