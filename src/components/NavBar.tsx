interface Props {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function NavBar({ searchQuery, setSearchQuery, searchOnClick }: Props) {
  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">Rankify</a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <button
              className="btn btn-outline-light"
              type="submit"
              onClick={(e) => {
                searchOnClick(e);
              }}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
