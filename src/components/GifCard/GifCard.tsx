export type Gif = {
  id?: string
  title: string
  url: string
}

export const GifCard = ({ title, url }: Gif) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
