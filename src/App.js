import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state={
      item: '',
      items: []
    }

    this.handleInputChange =this.handleInputChange.bind(this);
    this.submitItem =this.submitItem.bind(this);

  }

  handleInputChange(event){
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value })
  }

  submitItem() {
    let items = this.state.items;
    let item = this.state.item;
    items.push(item);
    this.setState({ items })
  }

  render() {
  return (
    <div className="App">
      <h1>TODO List App</h1>
      <input
        type="text"
        name="item"
        onChange={this.handleInputChange}
        />
        <button
          onClick={this.submitItem}
        >Submit item</button>
        
        {this.state.items.map((item) => {
          return (
            <p>{item}</p>
          )
        })}
    </div>
    );
  }
}

export default App;
