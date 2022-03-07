class GroceryListItem extends React.Component {
  constructor ( props ) {
    super ( props );

    this.state = {
      done: false,
      current: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      current: !this.state.current
    });
  }


  render() {
    var style = {
      textDecoration : this.state.done ? 'line-through' : 'none',
      fontWeight : this.state.current ? 'bold' : 'none'
    };

    return (
      <li style = { style } onClick = { this.onListItemClick.bind( this )} onMouseOver = { this.onListItemHover.bind( this )}>{this.props.groceryItem}</li>
    );
  }
}


var GroceryList = ( props ) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem = { groceryItem } />
    )}
  </ul>
)


var App = () => (
  <div>
    <h2>My GroceryList</h2>
    <GroceryList groceryItems={ ['Eggs', 'Veggies', 'Milk'] }/>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));

// {props.groceryItems.map(( currentItem, index ) => {
//   return (
//   <GroceryListItem item = { currentItem }/>
//   )
// })}

// var GroceryListItem = ( props ) => (
//   <li>{ props.item }</li>
// );