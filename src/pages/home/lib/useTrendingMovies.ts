import Data from '../mocks/data.json'
import type { Movie } from '../model'

export function useTrendingMovies(seenIds: string[]): Movie[] {
  const unseenMovies = Data.TendingNow.filter(
    (movie) => !seenIds.includes(movie.Id)
  )
  const seenMovies = seenIds.map((id) =>
    Data.TendingNow.find((movie) => movie.Id === id)
  ) as Movie[]

  const sortedMovies = unseenMovies.sort((a, b) => {
    const aDate = new Date(a.Date)
    const bDate = new Date(b.Date)
    return aDate.getTime() - bDate.getTime()
  })

  return seenMovies.concat(sortedMovies).slice(0, 50)
}
