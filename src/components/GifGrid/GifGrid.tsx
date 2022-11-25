import { useGifs } from '../../hooks/useGifs'
import { GifCard } from '..'
import { Loader } from '../Loader/Loader'

type propTypes = {
  query: string
}


export const GifGrid = ({ query }: propTypes) => {

  const { gifs, isError, isLoading } = useGifs(query);

  return (
    <div>
      <h3>{query}</h3>
      <div className="card-grid">
        {isLoading && <Loader />}
        {isError && <div>Is error</div>}
        {gifs.map(({ id, title, url }) => <GifCard key={id} title={title} url={url} />)}
      </div>
    </div>
  )
}
