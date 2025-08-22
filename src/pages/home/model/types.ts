export type DefaultFeaturedMovie = {
  Id: string
  Title: string
  CoverImage: string
  TitleImage: string
  Date: string
  ReleaseYear: string
  MpaRating: string
  Category: string
  Duration: string
  Description: string
}

export type Movie = DefaultFeaturedMovie & {
  VideoUrl: string
}

export type VideosData = {
  Featured: DefaultFeaturedMovie
  TendingNow: Movie[]
}
