import { Component } from "react";

export class ClassEvent extends Component {
  state = {
    num: 0,
  };
  render() {
    // const num = this.state.num;
    const { num } = this.state;
    // console.log(num);

    const handlePlus = () => {
      this.setState({
        num: num + 1,
      });
    };

    const handleMinus = () => {
      this.setState({
        num: num - 1,
      });
    };

    return (
      <div>
        <h1>{num}</h1>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
    );
  }
}
