import "./Search.scss";

const Search = (props) => {
  return (
    <>
      <input
        onChange={props.onChange}
        className="searchStyle"
        placeholder="Search User"
      />
    </>
  );
};

export default Search;
