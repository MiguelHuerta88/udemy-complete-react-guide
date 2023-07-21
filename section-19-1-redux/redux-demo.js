// we are going to use nodeJS so we need to run it like this
const redux = require("redux");

// reducer function. Always receives two params
// old state, dispatched action and should return new state object
const defaultState = {
  counter: 0,
};
const counterReducer = (state = defaultState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// create redux store
const store = redux.createStore(counterReducer);

// subscription
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
