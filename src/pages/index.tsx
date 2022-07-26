import type { NextPage } from "next";
import { trpc } from "@/backend/utils/trpc";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["ideas"]);

  const renderItems = () => {
    return data?.items.map(({ id, title, description }) => (
      <div key={id}>
        <div className="text-2xl font-bold underline">{title}</div>
        <div className="text-1xl">{description}</div>
      </div>
    ));
  };

  return <div>{!isLoading ? renderItems() : "Loading.."}</div>;
};

export default Home;
