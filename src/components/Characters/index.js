import React, { useEffect, useState } from "react";
import Axios from "axios";
import Filter from "../Filter";
import AllCharacters from "./AllCharacters";
import Locations from "../Locations";
import Episodes from "../Episodes";
import CharacterContext from "../../context/Character/CharacterContext";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocation] = useState([]);
  const [episodes, setEpisode] = useState([]);
  const [episode, setEpisodeSingle] = useState([]);
  const [text, setText] = useState("");
  const [cat, setCategoria] = useState("");

  const [charactersCreated, setCharactersCreated] = useState([]);

  useEffect(() => {
    const axiosCharacters = async () => {
      const res = await Axios.get("https://rickandmortyapi.com/api/character");

      setCharacters(res.data.results);
    };
    const axiosLocation = async () => {
      const res = await Axios.get("https://rickandmortyapi.com/api/location");

      setLocation(res.data.results);
    };
    const axiosEpisode = async () => {
      const res = await Axios.get("https://rickandmortyapi.com/api/episode");

      setEpisode(res.data.results);
    };
    const axiosEpisodeSingle = async () => {
      const res = await Axios.get(`https://rickandmortyapi.com/api/episode/1`);

      setEpisodeSingle(res.data);
    };

    axiosCharacters();
    axiosLocation();
    axiosEpisode();
    axiosEpisodeSingle();
  }, []);
  console.log(episode);

  const charactersFilter = characters.filter((character) =>
    character.name.toLowerCase().includes(text.toLowerCase())
  );
  const locationsFilter = locations.filter((location) =>
    location.name.toLowerCase().includes(text.toLowerCase())
  );
  const episodesFilter = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <CharacterContext.Provider
        value={{
          text,
          setText,
          cat,
          setCategoria,
          charactersFilter,
          locationsFilter,
          episodesFilter,
          charactersCreated,
          setCharactersCreated
        }}
      >
        <Filter />

        {cat === "Personaje" ? (
          <AllCharacters />
        ) : cat === "Ubicacion" ? (
          <Locations />
        ) : cat === "Episodio" ? (
          <Episodes />
        ) : (
          <>
            <AllCharacters />
            <Locations />
            <Episodes />
          </>
        )}
      </CharacterContext.Provider>
    </>
  );
}

export default Characters;
