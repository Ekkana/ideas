import React from "react";
import { trpc } from "@/backend/utils/trpc";
import Draggable from "react-draggable";

import { CloseButton, InputIdea } from "@/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { data, isLoading, refetch } = trpc.useQuery(["ideas"]);
  const deleteMutation = trpc.useMutation(["deleteIdea"], {
    onSuccess: () => refetch(),
  });

  const colorLookup = [
    "bg-card-blue",
    "bg-card-green",
    "bg-card-pink",
    "bg-card-violet",
  ];

  const handleDeleteCard = (id: number) => {
    deleteMutation.mutate({ id });
  };

  const nodeRef = React.useRef(null);

  const renderItems = () => {
    return data?.items.map(({ id, title, description }, index) => (
      <div key={id}>
        <Draggable nodeRef={nodeRef}>
          <div
            ref={nodeRef}
            className={`max-w-sm p-8 shadow-card-shadow rounded-md cursor-move ${
              colorLookup[index % colorLookup.length]
            }`}
          >
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
            <CloseButton handleClick={() => handleDeleteCard(id)} />
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
