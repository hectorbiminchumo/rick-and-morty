import React, {useContext} from "react";
import CharacterContext from "../../../context/Character/CharacterContext";

const AllCharacters = () => {

  const {text, charactersFilter} = useContext(CharacterContext)

  if (charactersFilter.length === 0)
    return <p>No hay coincidencias de personaje con "{text}"</p>;

  return (
    <>
      <div className="bg-gray-700 pt-6 pr-6 pl-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-row">
          {charactersFilter.map((character) => {
            const numEpisode = Math.floor(
              Math.random() * character.episode.length
            );

            return (
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 ">
                <div class="flex-4 flex flex-col p-8 pl-4">
                  <img
                    className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                    src={character.image}
                    alt=""
                  />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {character.id} {character.name}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">
                      {character.location.name}
                    </dd>
                    <dd className="text-gray-500 text-xs ">
                      {character.episode[numEpisode]}
                    </dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {character.gender}
                      </span>
                    </dd>
                  </dl>
                </div>
                <div></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AllCharacters;
