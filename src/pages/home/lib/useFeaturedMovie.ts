import { useMemo, useState } from 'react'
import type { DefaultFeaturedMovie, Movie } from '../model/types'
import Data from '../mocks/data.json'

const STORAGE_KEY = 'home.featuredMovie.history'

type CurrentMovie = DefaultFeaturedMovie | Movie

function getHistoryFromSession(): string[] {
  const raw = sessionStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  return JSON.parse(raw) as string[]
}

export function useFeaturedMovie() {
  const [currentMovie, setCurrentMovie] = useState<CurrentMovie>(Data.Featured)
  const history = useMemo(() => getHistoryFromSession(), [])

  const setCurrentFeaturedMovie = (movieId: string) => {
    const actualHistory = getHistoryFromSession()
    const newHistory = [
      movieId,
      ...actualHistory.filter((id) => id !== movieId),
    ]
    setCurrentMovie(
      Data.TendingNow.find((movie) => movie.Id === movieId) as CurrentMovie
    )
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
  }

  return {
    currentFeaturedMovie: currentMovie,
    setCurrentFeaturedMovie,
    history,
  }
}
