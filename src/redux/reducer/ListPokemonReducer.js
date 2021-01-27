const initialState = {
    pokemonListResult: [],
    pokemonList: {},
    isLoading: false, 
    error: ""
}

export default (state = initialState, action={}) => {
    switch (action.type) {
        case 'GET_POKEMON_LIST_REQUEST':
          return {
            ...state,
            isLoading: true,
          };
        case 'GET_POKEMON_LIST_SUCCESS':
          return {
            ...state,
            pokemonListResult: action.payload.results,
            pokemonList: action.payload,
            isLoading: false,
          };
        case 'GET_POKEMON_LIST_FAILURE':
          return {
            ...state,
            error: action.payload,
            isLoading: false,
          };
        case 'LOAD_MORE_POKEMON_LIST_REQUEST':
          return {
            ...state,
            isLoading: true,
          };
        case 'LOAD_MORE_POKEMON_LIST_SUCCESS':
          const newDataResult = action.payload.results;
          return {
            ...state,
            pokemonListResult: [...state.pokemonListResult, ...newDataResult],
            pokemonList: action.payload,
            isLoading: false,
          };
        case 'LOAD_MORE_POKEMON_LIST_FAILURE':
          return {
            ...state,
            error: action.payload,
            isLoading: false,
          };

        default: return state;
    }
}