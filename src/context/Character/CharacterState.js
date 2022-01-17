import { useReducer } from "react";
import CharacterContext from "./CharacterContext";
import CharacterReducer from "./CharacterReducer";

const CharacterState = (props) => {
  //1. ESTADO INICIAL

  const initialState = {
    characterState: {
      name: "",
      gender: "",
      location: "",
      image: "",
    },
    arrCharacter: [],
  };

  //2. CONFIGURACION DE REDUCER Y CREACION DE ESTADO GLOBAL
  const [globalState, dispatch] = useReducer(CharacterReducer, initialState);

  //3. FUNCIONES DE CAMBIO DE ESTADO GLOBAL

  const createCharacter = (form) => {
    console.log("creando personaje");
    dispatch({
      type: "CREATE_CHARACTER",
      payload: form,
    });

    window.location.replace("/characters");
  };

  const newCharacters = [];
  newCharacters.push(globalState.characterState);
  console.log(newCharacters);
  //4. RETORNO
  return (
    <CharacterContext.Provider
      value={{
        characterState: globalState.characterState,
        arrCharacter: [],
        createCharacter,
        newCharacters,
      }}
    >
      {props.children}
    </CharacterContext.Provider>
  );
};
export default CharacterState;
