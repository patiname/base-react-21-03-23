import { Component } from "react";

class ClassComponent extends Component {
  render() {
    const nickName = this.props.nickName;
    const age = this.props.age;

    return (
      <div>
        <h1>클래스 컴포넌트</h1>
        <p>
          안녕 내이름은 {nickName} 나이는 {age}
        </p>
      </div>
    );
  }
}

export default ClassComponent;
