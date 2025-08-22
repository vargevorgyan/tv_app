import { Button, useDebounce } from '@/shared'
import type { DefaultFeaturedMovie, Movie } from '@/pages/home/model/types'
import { PlayIcon } from './PlayIcon'
import clsx from 'clsx'

type Props = {
  movie: DefaultFeaturedMovie | Movie
}

export const FeaturedMovie = ({ movie }: Props) => {
  const debouncedMovie = useDebounce(movie, 2000)
  const isMovieChanged = movie.Id !== debouncedMovie.Id
  const debouncedVideoUrl = (debouncedMovie as Movie).VideoUrl
  const videoUrl = (movie as Movie).VideoUrl

  return (
    <div className="w-full pb-12 pt-[185px] min-h-200 relative">
      <div className="z-10 relative">
        <div className="text-gray mb-2 text-2xl font-bold">Movie</div>
        <img
          src={`/assets/${movie.TitleImage}`}
          alt={movie.Title}
          className="mb-[30px]"
        />
        <div className="flex text-[30px] gap-[26px] mb-3">
          <span>{movie.ReleaseYear}</span>
          <span>{movie.MpaRating}</span>
          <span>{movie.Duration}</span>
        </div>
        <p className="text-[32px] mb-[25px] max-w-[800px]">
          {movie.Description}
        </p>
        <div className="flex gap-4.5">
          <Button className="gap-3.5">
            <PlayIcon />
            Play
          </Button>
          <Button className="gap-3.5 to-[rgb(6,17,87)] from-[rgb(43,43,238)] bg-gradient-to-br text-white">
            More Info
          </Button>
        </div>
      </div>
      {videoUrl && (
        <video
          src={'https://www.w3schools.com/html/mov_bbb.mp4'}
          className={clsx(
            'absolute top-0 h-200 object-cover right-0 w-full transition-opacity duration-1000',
            isMovieChanged ? 'opacity-0' : 'opacity-100'
          )}
          autoPlay
          muted
          loop
        />
      )}
      {!debouncedVideoUrl && (
        <img
          src={`/assets/${debouncedMovie.CoverImage}`}
          alt={movie.Title}
          className={clsx(
            'absolute top-0 h-200 object-cover right-0 transition-opacity duration-1000',
            isMovieChanged ? 'opacity-0' : 'opacity-100'
          )}
        />
      )}
    </div>
  )
}
