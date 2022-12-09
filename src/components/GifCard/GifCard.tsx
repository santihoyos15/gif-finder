export type Gif = {
  id?: string
  title: string
  url: string
}

export const GifCard = ({ title, url }: Gif) => {
  return (
    <div className="card">
      <img data-testid="gif-card-image" src={url} alt={title} />
      <p data-testid="gif-card-title">{title}</p>
    </div>
  )
}
