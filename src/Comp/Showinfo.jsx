import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Showinfo() {
  const [charinfo, setCharinfo] = useState([]);
  const { CharId } = useParams();

  useEffect(() => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((response) => {
        const character = response.data.find(
          (char) => char.id === parseInt(CharId)
        );
        setCharinfo(character);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [CharId]);

  const abilitiesToShow = charinfo.abilities
    ? charinfo.abilities.slice(0, 2)
    : [];

  return (
    <>
      <div className=" flex justify-center hero  bg-[url('./assets/final1.jpg')]  items-center h-screen max-sm:h-screen">
        <div className="bg-base-100 card shadow-xl glass  h-[600px] w-[800px] flex justify-center items-center">
          <div className="flex items-center card card-side glass bg-base-100 shadow-xl">
            <img src={charinfo.img_url} />

            <div className="card-body text-lg font-bold ">
              <p>{`Name: ${charinfo.name}`}</p>
              <p>{`Gender: ${charinfo.gender}`}</p>
              <p>{`species: ${charinfo.species}`}</p>
              <p>{`origin: ${charinfo.origin}`}</p>
              <p>{`hair: ${charinfo.hair}`}</p>
              <p>{`status: ${charinfo.status}`}</p>
              <div className="flex flex-col gap-1">
                <p>Abilities:</p>
                {abilitiesToShow.length > 0 ? (
                  abilitiesToShow.map((ability, index) => (
                    <p key={index}>{ability}</p>
                  ))
                ) : (
                  <p>None</p>
                )}
              </div>
              cd
              <Link to="/" className="mt-4 btn text-blue-600 hover:underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showinfo;
