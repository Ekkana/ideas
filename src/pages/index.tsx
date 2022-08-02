import type { NextPage } from "next";
import { trpc } from "@/backend/utils/trpc";
import Draggable from "react-draggable";

import InputIdea from "@/components/InputIdea";

const Home: NextPage = () => {
  const { data, isLoading, refetch } = trpc.useQuery(["ideas"]);

  const colorLookup = [
    "bg-card-blue",
    "bg-card-green",
    "bg-card-pink",
    "bg-card-violet",
  ];

  const renderItems = () => {
    return data?.items.map(({ id, title, description }, index) => (
      <div key={id}>
        <Draggable>
          <div
            className={`max-w-sm p-8 shadow-card-shadow rounded-md cursor-move ${
              colorLookup[index % colorLookup.length]
            }`}
          >
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          </div>
        </Draggable>
      </div>
    ));
  };

  return (
    <div className="h-screen w-screen bg-main-bg bg-repeat">
      {!isLoading ? renderItems() : "Loading.."}
      <InputIdea refetchList={refetch} />
    </div>
  );
};

export default Home;
