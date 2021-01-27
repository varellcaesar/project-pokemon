import apiClient from '../../api/api';

export const getPokemonListRequest = () => ({
    type: 'GET_POKEMON_LIST_REQUEST'
});

export const getPokemonListSuccess = (payload) => ({
    type: 'GET_POKEMON_LIST_SUCCESS', payload
})

export const getPokemonListFailure = (error) => ({
    type: 'GET_POKEMON_LIST_FAILURE', error
})

export const loadMorePokemonListRequest = () => ({
  type: 'LOAD_MORE_POKEMON_LIST_REQUEST'
});

export const loadMorePokemonListSuccess = (payload) => ({
  type: 'LOAD_MORE_POKEMON_LIST_SUCCESS', payload
})

export const loadMorePokemonListFailure = (error) => ({
  type: 'LOAD_MORE_POKEMON_LIST_FAILURE', error
})

export function getPokemonList() {
    return (dispatch) => {
      dispatch(getPokemonListRequest());
      apiClient.getPokemonList()
        .then(res => {
          dispatch(getPokemonListSuccess(res.data))
        })
        .catch(err => {
          dispatch(getPokemonListFailure(err.response))
        });
    }
}

export function loadMorePokemonList(limit, offset) {
  return (dispatch) => {
    dispatch(loadMorePokemonListRequest());
    apiClient.loadMorePokemonList(limit, offset)
      .then(res => {
        dispatch(loadMorePokemonListSuccess(res.data))
      })
      .catch(err => {
        dispatch(loadMorePokemonListFailure(err.response))
      });
  }
}