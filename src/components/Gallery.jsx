import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import SingleImage from './SingleImage'
import Loading from './Loading'
import { useAppContext } from '../context'

const api_key = import.meta.env.VITE_ACCESS_KEY
const url = `https://api.unsplash.com/search/collections?client_id=${api_key}`

const Gallery = () => {
  const { searchValue } = useAppContext()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchValue],
    queryFn: async () => {
      const data = await axios(`${url}&query=${searchValue}`)
      return data.data.results
    },
  })

  // console.log(data)

  if (isLoading) return <Loading />
  if (isError) return <p>No Result Found...</p>

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <SingleImage key={item.id} {...item} />
      ))}
    </div>
  )
}
export default Gallery
