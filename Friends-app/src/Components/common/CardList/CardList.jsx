import Axios from "axios";
import { Component } from "react";
import Card from "../Card/Card";
import "./CardList.scss";
import CustomButton from "../CustomButton/CustomButton";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.originalList = [];
    this.state = {
      student: this.originalList,
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // handle success
        if (response?.status === 200) {
          this.originalList = response?.data;
          this.setState({
            student: this.originalList,
          });
        }
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  onCardClickInParent = (userName) => {
    const selectedUserObject = this.originalList.filter(
      (user) => user.name === userName
    )[0];
    this.props.setSelectedUser(selectedUserObject);
    this.props.hideSearch(true);
  };

  getUserDetails(name) {
    const selectedStudent = this.state.student.filter(
      (stdObject) => stdObject.name === name
    )[0];
    const newEle = Object.keys(selectedStudent).map((key) => {
      if (typeof selectedStudent[key] !== "object") {
        return <li>{`${key} : ${selectedStudent[key]}`}</li>;
      }
    });
    return newEle;
  }


  render() {
    return (
      <>
        <div className="cardContainerStyle">
          {this.state.student?.map((std, index) => (
            <Card
              className="cardsChild"
              key={index}
              name={std?.name}
              city={std?.address?.city}
              email={std?.email}
              id={std?.id}
              onCardClick={this.onCardClickInParent}
            />
          ))}
        </div>
      </>
    );
  }
}

export default CardList;
