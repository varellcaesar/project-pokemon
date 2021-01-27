const initialState = {
    pokemonDetail: {},
    pokemonTypes: [],
    pokemonMoves: [],
    isLoading: false, 
    error: ""
}

export default (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_POKEMON_DETAIL_REQUEST':
          return {
            ...state,
            isLoading: true,
          };
        case 'GET_POKEMON_DETAIL_SUCCESS':
          return {
            ...state,
            pokemonDetail: action.payload,
            pokemonTypes: action.payload.types,
            pokemonMoves: action.payload.moves,
            isLoading: false,
          };
        case 'GET_POKEMON_DETAIL_FAILURE':
          return {
            ...state,
            error: action.payload,
            isLoading: false,
          };

        default: return state;
    }
}