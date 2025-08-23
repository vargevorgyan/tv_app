import type { Movie } from '../../model/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

type Props = {
  setCurrentFeaturedMovie: (movieId: string) => void
  movies: Movie[]
}

const MAX_MOVIES_COUNT = 50

export const TrendingSection = ({ movies, setCurrentFeaturedMovie }: Props) => {
  const slicedMovies = movies.slice(0, MAX_MOVIES_COUNT)

  return (
    <div className="w-full relative">
      <h2 className="-top-12 absolute text-[32px] font-medium">Trending Now</h2>
      <Swiper
        modules={[FreeMode, Mousewheel]}
        freeMode={{ enabled: true, momentumRatio: 0.35 }}
        mousewheel={{ forceToAxis: false, releaseOnEdges: true }}
        slidesPerView="auto"
        spaceBetween={16}
        grabCursor
      >
        {slicedMovies.map((movie) => (
          <SwiperSlide
            key={movie.Id}
            className="!w-auto"
            style={{ width: 'auto' }}
            onClick={() => setCurrentFeaturedMovie(movie.Id)}
          >
            <img
              src={`/assets/${movie.CoverImage}`}
              alt={movie.Title}
              width={200}
              height={296}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="w-[200px] h-[296px]"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
