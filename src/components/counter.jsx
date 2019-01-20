import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProp, prevState) {
    console.log("prevProp", prevProp);
    console.log("prevState", prevState);
  }
  //   state = {
  //     value: this.props.counter.value
  //     //tags: ["tag1", "tag2", "tag3"]
  //   };
  //   handleIncrement = product => {
  //     this.setState({ value: this.state.value + 1 });
  //     // this.setState({ tags: this.state.tags.push(product) });
  //   };
  //   handleDecrement = product => {
  //     this.setState({ value: this.state.value - 1 });
  //   };
  // {this.props.children} allows to print children of prop in other methods
  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increase
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // {this.state.tags.length === 0 && "Please create a new  tag!"}
  // {this.renderTags()}
  // ^^-- allows bew of list/tags
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  getBadgeClasses() {
    // set css for buttons
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //set css for the font
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
