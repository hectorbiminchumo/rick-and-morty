import React, {useContext} from "react";
import CharacterContext from "../../context/Character/CharacterContext";
import { Link } from "react-router-dom";
function Episodes() {

  const {text, episodesFilter} = useContext(CharacterContext)

  if (episodesFilter.length === 0)
    return <p>No hay coincidencias de episodios con "{text}"</p>;

  return (
    <>
      <div className="bg-gray-700 pb-6 pl-6 pr-6 pt-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-row">
          {episodesFilter.map((episode) => {
            return (
              <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="flex-4 flex flex-col p-8">
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {" "}
                    {episode.id} {episode.name}{" "}
                  </h3>
                  <dl className="mt-1 flex-grow flex flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-500 text-sm">
                      {" "}
                      Emision: {episode.air_date}{" "}
                    </dd>
                    <dd className="text-gray-500 text-sm"> </dd>

                    <dt className="sr-only">Role</dt>
                    <dd className="mt-3">
                      <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {episode.episode}
                      </span>
                    </dd>
                  </dl>
                  <Link
                    to={`/characters/${episode.id}`}
                    className="w-12 mx-auto text-red-500 pt-4 font-medium hover:text-[#A6CF98]"
                  >
                    {" "}
                    + Info{" "}
                  </Link>
                </div>
                <div></div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Episodes;
