import { createStore, combineReducers, applyMiddleware } from 'redux';
import pokemonListReducer from '../reducer/ListPokemonReducer';
import pokemonDetailReducer from '../reducer/DetailPokemonReducer';
import thunk from "redux-thunk";


export default createStore(
  combineReducers({
    pokemonListReducer,
    pokemonDetailReducer,
  }),
  {},
  applyMiddleware(thunk)
)