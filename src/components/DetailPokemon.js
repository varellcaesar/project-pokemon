import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import "antd/dist/antd.css";

// import './../stylesheets/detail-layout.css'
import PokemonDetailContainer from '../components/PokemonDetailContainer';

import {getPokemonDetail} from '../redux/action/DetailPokemonAction'

class DetailPokemon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount = () => {
    const pokemonId = this.props.match.params.id;
    this.props.getPokemonDetail(pokemonId);
  }
  
  render(){
    const {pokemonDetail} = this.props;
    return (
      <div>
        <PokemonDetailContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    pokemonDetail: state.pokemonDetailReducer
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getPokemonDetail(id){
      dispatch(getPokemonDetail(
        id
      ))
    },
  }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPokemon));