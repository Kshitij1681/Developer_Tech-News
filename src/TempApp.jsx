import React, { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("Delhi");

  const InputEvent = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "4007a3fccfmsh6b7af6ced63da96p18b95bjsnf565d5765b8b",
          "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
      };
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`;
      const res_temp = await fetch(url, options);
      const data_temp = await res_temp.json();
      //   console.log(data_temp);
      setCity(data_temp);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container-fluid pt-1">
        <div className="container w-50 mx-auto mt-5 py-5 rounded-4 shadow-lg temp_app" style={{ backgroundColor: "#A0B7DC" }}>
          <div className="row justify-content-center mb-5">
            <div className="col-10">
              <div>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-lg py-2 px-4"
                  placeholder="Enter Your City Here..."
                  value={search}
                  onChange={InputEvent}
                />
              </div>
            </div>
          </div>
          {city.error ? (
            <div className="row info justify-content-center pt-3 mb-4">
              <div className="col-10">
                <p className="text-center">No Data Found</p>
              </div>
            </div>
          ) : (
            <div className="row info justify-content-center pt-3 mb-4">
              <div className="col-10">
                <h2 className="py-3 text-center location mb-5">
                  <i className="fa-solid fa-street-view px-2" style={{ color: "#ea781a" }}></i> {search}
                </h2>
                <h1 className="text-center py-1 temp mb-3"> {city.temp}°C </h1>
                <h3 className="temp_minmax text-center">
                  Max: {city.max_temp}°C | Min: {city.min_temp}°C
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TempApp;
