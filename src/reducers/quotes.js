export default (state = [], action) => {
  //  

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      // console.log(state)
      // myArray.find(x => x.id === '45').foo;
      const index = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[index]
      debugger;
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1}),
        ...state.slice(index + 1)
        // ...state.map(quote => {
        //    if (quote.id === action.quoteId) quote.votes++;
        //    return quote
        // })
     ];

    // case 'DOWNVOTE_QUOTE',
    //   return [];

    default:    
      return state;
  }
}
