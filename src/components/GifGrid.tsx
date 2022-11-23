import { useGifs } from '../hooks/useGifs'
import { GifCard } from '../components'

type propTypes = {
  query: string
}


export const GifGrid = ({ query }: propTypes) => {

  const { gifs, isError, isLoading } = useGifs(query);

  return (
    <>
      <h3>{query}</h3>

      <div className="card-grid">
        {isLoading && <div>Is Loading</div>}
        {isError && <div>Is error</div>}
        {gifs.map(({ id, title, url }) => <GifCard key={id} title={title} url={url} />)}
      </div>
    </>
  )
}
