const initialState = {};

export default (state = initialState, { type, value }) => {

  switch(type) {

    case 'SOME_DATA':
      return {
        ...state,
        
      }

    default:
      return state;

  }

}
