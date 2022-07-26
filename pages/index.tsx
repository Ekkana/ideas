import type { NextPage } from 'next'
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {

  const {data, isLoading} = trpc.useQuery(["hello", {text: "Alexey"}]);
  console.log({data, isLoading});

  return (
    <div className='text-3xl font-bold text-red-400 underline'>{!isLoading ? data?.greeting : 'Loading..'}</div>
  )
}

export default Home
