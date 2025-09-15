import { useCallback, useState, useEffect } from "react";
import debounce from "lodash.debounce";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import { AppConfig } from "../config/config";

export const SearchBar = ({}) => {
  const { store } = useGlobalReducer();
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((value) => {
      if (!value.trim()) {
        setFilteredResults([]);
        return;
      }
      const filtered = searchArray.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    }, 500),
    [searchArray]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const endpoints = AppConfig.api.endpoints;
    let results = [];
    endpoints.forEach((endpoint) => {
      const items = store[endpoint] || [];
      items.forEach((item) => {
        if (item?.properties?.name) {
          results.push({
            name: item.properties.name,
            endpoint,
            uid: item.uid,
          });
        }
      });
    });
    setSearchArray(results);
  }, [store]);

  return (
    <div className="position-relative">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="🔎 Search"
          aria-label="Search"
          value={query}
          onChange={handleChange}
        />
      </form>

      {filteredResults.length > 0 && (
        <ul className="list-group position-absolute mt-2 w-100">
          {filteredResults.map((result, i) => (
            <li key={i} className="list-group-item">
              <Link
                to={`/${result.endpoint}/${result.uid}`}
                className="text-decoration-none"
                onClick={() => {
                  setQuery("");
                  setFilteredResults([]);
                }}
              >
                {result.name} - {result.endpoint}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
