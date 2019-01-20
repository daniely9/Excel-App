import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //<h1>Counter #{counter.id}</h1> adds prop with values of above array
  render() {
    console.log("Counters - Rendered");
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            //send props to counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
