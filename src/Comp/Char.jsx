import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Char() {
  const [char, setChar] = useState([]);

  const delpic = (id) => {
    axios
      .delete(`https://665736d49f970b3b36c8673a.mockapi.io/user/${id}`)
      .then(function (response) {
        console.log(response.data);
        setChar(char.filter((item) => item.id !== id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getchar = () => {
    axios
      .get("https://665736d49f970b3b36c8673a.mockapi.io/user")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setChar(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };
  useEffect(() => {
    getchar();
  }, []);
  return (
    <>
      <div className="hero  h-[500px] bg-[url('./assets/final1.jpg')]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-">
            <h1 className="mb-5 text-5xl text-white font-bold">
              Welcome to the final space info page!
            </h1>
          </div>
        </div>
      </div>

      <hr className="" />
      <div className="flex gap-1 justify-between flex-wrap my-10 ">
        {char.map((elm) => (
          <div
            className="flex flex-col m-2 max-sm:flex max-sm:justify-center"
            key={elm.id}
          >
            <div className="flex  items-center card bg-base-100 w-96 shadow-xl">
              <Link to={`detailes/${elm.id}`}>
                {" "}
                <img src={elm.img_url} />
              </Link>
              <div className="card-body">
                <p className="card-title flex justify-center">{elm.name}</p>
                <div className="flex">
                  <Link to={`detailes/${elm.id}`}>
                    <button className="btn  btn-outline btn-primary">
                      Click for more detailes
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline btn-error ml-2"
                    onClick={() => delpic(elm.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Char;
