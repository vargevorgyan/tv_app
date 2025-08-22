import { FeaturedMovie } from './featuredMovie/FeaturedMovie'
import { Menu } from './menu/Menu'
import { TrendingSection } from './trendingSection/TrendingSection'
import { useFeaturedMovie } from '../lib/useFeaturedMovie'
import { useTrendingMovies } from '../lib/useTrendingMovies'

export function Home() {
  const { currentFeaturedMovie, setCurrentFeaturedMovie, history } =
    useFeaturedMovie()
  const trendingMovies = useTrendingMovies(history)

  return (
    <div className="bg-background w-screen gap-11 min-h-screen flex">
      <Menu />
      <main className="flex flex-col w-full">
        <FeaturedMovie movie={currentFeaturedMovie} />
        <TrendingSection
          setCurrentFeaturedMovie={setCurrentFeaturedMovie}
          movies={trendingMovies}
        />
      </main>
    </div>
  )
}
