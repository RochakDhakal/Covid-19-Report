import React from "react";

function Cards(props) {
  const data = props.data;
  // console.log("Data", data);
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
          <h5 className="card-title" >Country: <span className="text-white-400 text-2xl mx-2">{data.country}</span></h5>
          <p className="card-text">
            Active Cases: <span className="text-black-100 text-2xl mx-2">{data.cases?.active}</span>
          </p>
          <p className="card-text">
            Recovered: <span className="text-green-400 text-2xl mx-2">{data.cases?.recovered}</span>
          </p>
          <p className="card-text">
            Total Cases:<span className="text-white-400 text-2xl mx-2">{data.cases?.total}</span>
          </p>
          <p className="card-text">
            Continent:<span className="text-white-400 text-2xl mx-2">{data.continent}</span>
          </p>
          <p className="card-text">
            Deaths:<span className="text-red-400 text-2xl mx-2">{data.deaths?.total}</span>
          </p>
          <p className="card-text">
            Total Tests:<span className="text-white-400 text-2xl mx-2">{data.tests?.total}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
