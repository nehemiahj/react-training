import { Link } from "react-router-dom";
import "./Details.scss";
import { useEffect, useState } from "react";
import { useStudentContext } from "../../App/App";
import { useSelector } from "react-redux";
import SimpleForm from "../CustomForm/CustomForm";

function Details() {
  // const [selectedUser, setSelectedUser] = useState(null);
  //context API
  // const { student, setSelectedStudent } = useStudentContext();

  //redux
  const selectedStudentRedux = useSelector((state) => state.student.selectedStudent);

  console.log("selectedStudentRedux ", selectedStudentRedux)

  

  // useEffect(() => {
  //   if (selectedStudentRedux) {
  //     setSelectedUser(selectedStudentRedux);
  //   }
  // }, [selectedStudentRedux]);


  return (
    <>
      <div className="DetailsContainerStyle">
        <h1>User Details</h1>
        <img
          alt="robots"
          className="robots"
          src={`https://robohash.org/${selectedStudentRedux?.id}?10*10`}
        />
        <label className="labelStyle"> Name: {selectedStudentRedux?.name}</label>
        <label className="labelStyle">
          {" "}
          City: {selectedStudentRedux?.address?.city}
        </label>
        <label className="labelStyle"> Email: {selectedStudentRedux?.email}</label>
      </div>
      <Link to={"/home"}>Link to Home</Link>
      <br />
      <br />
      <SimpleForm/>
    </>
  );
}

export default Details;
