import apiClient from '../../api/api';

export const getPokemonDetailRequest = () => ({
  type: 'GET_POKEMON_DETAIL_REQUEST'
});

export const getPokemonDetailSuccess = (payload) => ({
  type: 'GET_POKEMON_DETAIL_SUCCESS', payload
})

export const getPokemonDetailFailure = (error) => ({
  type: 'GET_POKEMON_DETAIL_FAILURE', error
})

export function getPokemonDetail(id) {
  return (dispatch) => {
    dispatch(getPokemonDetailRequest());
    apiClient.getPokemonDetail(id)
      .then(res => {
        dispatch(getPokemonDetailSuccess(res.data))
      })
      .catch(err => {
        dispatch(getPokemonDetailFailure(err.response))
      });
  }
}