const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search contacts by name..."
            className="input input-bordered w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="btn btn-square"
              onClick={() => setSearchQuery('')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
