import React from 'react'
import { hot } from 'react-hot-loader'

// Only load it when it is required!!!
const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    const { count } = this.state
    // Warning might never get rendered, so render it async
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Count: {count}</h2>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
