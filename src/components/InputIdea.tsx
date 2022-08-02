import React from "react";
import { trpc } from "@/backend/utils/trpc";

const InputIdea = ({ refetchList }: { refetchList: () => void }) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleAddSuccess = () => {
    refetchList();
    setTitle("");
    setDescription("");
  };

  const { isLoading, refetch } = trpc.useQuery(
    ["addIdea", { title, description }],
    { enabled: false, onSuccess: handleAddSuccess }
  );

  const handleAdd = () => {
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <input
        className="border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputIdea;
