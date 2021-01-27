import axios from 'axios';

const POKEMON_LIST_URL = () => 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';
const POKEMON_LIST_URL_LOAD_MORE = (limit, offset) => 'https://pokeapi.co/api/v2/pokemon/?offset='+limit+'&limit='+offset;
const POKEMON_DETAIL_URL = (id) => 'https://pokeapi.co/api/v2/pokemon/'+id;

const api = {
    getPokemonList(){
        return axios.get(POKEMON_LIST_URL());
    },
    loadMorePokemonList(limit, offset){
        return axios.get(POKEMON_LIST_URL_LOAD_MORE(limit, offset));
    },
    getPokemonDetail(id){
        return axios.get(POKEMON_DETAIL_URL(id));
    }
}

export default api;