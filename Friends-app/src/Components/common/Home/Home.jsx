import { useState } from "react";
import Search from "../Search/Search";
import CardList from "../CardList/CardList";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useStudentContext } from "../../App/App";
import { useDispatch } from "react-redux";

function Home() {
  const [searchKey, setSearchKey] = useState('');
  const [isSearch, setIsSearch] = useState(true);
  const navigate = useNavigate();

  //context API
  // const { student, setSelectedStudent } = useStudentContext();

  //redux
  const dispatch = useDispatch();
  return (
    <>
      <div className="homeContainer">
        {isSearch && (
          <Search
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        )}
        <CardList
          hideSearch={(flag) => {
            setIsSearch(!isSearch);
          }}
          cardsBackground="#c7fcd6"
          searchKey={searchKey}
          setSelectedUser={(user) => {
            // localStorage.setItem("selectedUser", JSON.stringify(user));
            //context
            // setSelectedStudent(user);
            //redux
            dispatch({ type: "SET_SELECTED_STUDENT", payload: user })
            navigate("/details", { replace: true });
          }}
        />
      </div>
    </>
  );
}

export default Home;
