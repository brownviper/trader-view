
```
/**
 * What's the issue with this component. Why?
 * How would you go about fixing it?
 */
class App extends React.Component {
state = { search: '' }
handleChange = event => {
/**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can 
     * delay the call 250ms after the user has stoped typing.
     */
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: event.target.value
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```
# trade-viewer

### an exercise in react/redux/html/css

1- Allow creation of a new trade, automatically recording timestamp and accepting the following
fields:
######a. Stock Symbol
######b. Price, and
######c. number of shares

2- Display a table of trades entered in reverse chronological order which is updated after each
trade.

yarn install
yarn test
yarn start
