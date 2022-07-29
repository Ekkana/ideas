import type { NextPage } from "next";
import { trpc } from "@/backend/utils/trpc";
import Draggable from "react-draggable";

import { InputIdea } from "@/components/InputIdea";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["ideas"]);

  const renderItems = () => {
    return data?.items.map(({ id, title, description }) => (
      <div key={id}>
        <Draggable>
          <div className="max-w-sm p-8 bg-white shadow-md rounded-md cursor-move">
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          </div>
        </Draggable>
      </div>
    ));
  };

  return <div>{!isLoading ? renderItems() : "Loading.."}</div>;
};

export default Home;
