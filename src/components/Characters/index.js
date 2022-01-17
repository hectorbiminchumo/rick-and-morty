import React, { useEffect, useState } from "react";
import Axios from "axios";
import Filter from "../Filter";
import AllCharacters from "./AllCharacters";
import Locations from "../Locations";
import Episodes from "../Episodes";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocation] = useState([]);
  const [episodes, setEpisode] = useState([]);
  const [episode, setEpisodeSingle] = useState([]);
  const [text, setText] = useState("");
  const [cat, setCategoria] = useState("");

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
      <Filter
        text={text}
        setText={setText}
        cat={cat}
        setCategoria={setCategoria}
      />
      {cat === "Personaje" ? (
        <AllCharacters
          text={text}
          charactersFilter={charactersFilter}
          cat={cat}
        />
      ) : cat === "Ubicacion" ? (
        <Locations text={text} locationsFilter={locationsFilter} cat={cat} />
      ) : cat === "Episodio" ? (
        <Episodes text={text} episodesFilter={episodesFilter} cat={cat} />
      ) : (
        <>
          <AllCharacters
            text={text}
            charactersFilter={charactersFilter}
            cat={cat}
          />
          <Locations text={text} locationsFilter={locationsFilter} cat={cat} />
          <Episodes text={text} episodesFilter={episodesFilter} cat={cat} />
        </>
      )}
    </>
  );
}

export default Characters;
