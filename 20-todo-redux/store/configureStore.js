import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
