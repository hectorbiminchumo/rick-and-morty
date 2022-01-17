//USAMOS LA ARQUITECTURA FLUX

import { useReducer } from "react";
import EpisodeContext from "./EpisodeContext";
import EpisodeReducer from "./EpisodeReducer";
import Axios from "axios";

const EpisodeState = (props) => {
  //1. ESTADO INICIAL

  const initialState = {
    singleEpisode: {
      id: "",
      name: "",
      air_date: "",
      episode: "",
      characters: "",
      url: "",
      created: "",
    },
  };

  //2. CONFIGURAR REDUCER Y CREACION DE ESTADO GLOBAL

  const [globalState, dispatch] = useReducer(EpisodeReducer, initialState);

  //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
  const getEpisode = async (episodeId) => {
    console.log("Este es el id", episodeId);

    const res = await Axios.get(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );

    console.log(res.data);

    dispatch({
      type: "GET_EPISODE",
      payload: res.data,
    });
  };
  //4. RETORNO
  return (
    <EpisodeContext.Provider
      value={{
        singleEpisode: globalState.singleEpisode,
        getEpisode,
      }}
    >
      {props.children}
    </EpisodeContext.Provider>
  );
};
export default EpisodeState;
