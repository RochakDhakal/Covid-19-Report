import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [select, setSelect] = useState([]);
  const [isActive, setIsActive] = useState(false);


  const PARAMS = {
    method: "GET",
    url: import.meta.env.VITE_BASE_URL + `${"statistics"}`,
    headers: {
      "X-RapidAPI-Key": "c44ef64036msh540dba6b7cdd0abp135bd6jsn6340fa9b3521",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const getData = async () => {
    try {
      const response = await axios(PARAMS);
      const countryList = response.data.response;
      // console.log(response);
      setData(countryList);
      setFiltered(countryList);
    } catch (e) {
      console.log("Error", e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (event) => {
    const inpVal = event.target.value;
    setSearch(inpVal);

    // Filter countries based on the input value
    const filteredCountries = data.filter((item) => {
      const countryName = item.country || "";
      return countryName.toLowerCase().includes(inpVal.toLowerCase());
    });
    const sortedCountries = filteredCountries.sort((a, b) =>
      a.country.localeCompare(b.country)
    );

    setFiltered(sortedCountries);
  };
  const handleCountryClick = (country) => {
    setSelect(country);
    setIsActive(false);
  };

  return (
    <div>
      <h1 className="text-red-500">Covid-19 Data</h1>
      <input
        type="text"
        placeholder="Enter a country"
        value={search}
        onChange={handleInputChange}
        style={{ height: "3rem", width: "20rem", fontSize: "2.5rem" }}
        onFocus={() => setIsActive(true)}
      />
      {isActive && filtered.length > 0 && (
        <ul>
          {filtered.map((item, index) => (
            <li
              key={index}
              onClick={()=>handleCountryClick(item)}
              data-toggle="modal"
              data-target="#exampleModalCenter"
              className="cursor-pointer hover:bg-blue-100 hover:text-black font text-2xl border-grey-500"
            >
              {item.country}
            </li>
          ))}
        </ul>
      )}
    { select && select.country && <Cards data = {select} />}
    </div>
  );
}

export default Search;
