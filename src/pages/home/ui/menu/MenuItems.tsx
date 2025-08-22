import clsx from 'clsx'

const icons = [
  { name: 'search', title: 'Search' },
  { name: 'home', title: 'Home' },
  { name: 'show', title: 'TV Shows' },
  { name: 'movies', title: 'Movies' },
  { name: 'genres', title: 'Genres' },
  { name: 'watch-later', title: 'Watch Later' },
]

const activeMenuItem = 'home'

export const MenuItems = () => {
  return (
    <ul className="flex flex-col items-start justify-center gap-2">
      {icons.map((icon) => (
        <li key={icon.name}>
          <a
            href="#"
            className={clsx(
              'size-[82px] cursor-pointer flex items-center rounded-full overflow-hidden group-hover:w-[330px] transition-all pl-7 duration-300',
              icon.name === activeMenuItem && 'bg-[#3B486D]',
              'hover:bg-[#3B486D]'
            )}
          >
            <img
              src={`/assets/icons/${icon.name}.png`}
              alt={icon.name}
              width={30}
              height={30}
              loading="lazy"
              decoding="async"
              className="h-[30px]"
            />

            <span className="text-4xl h-[26px] whitespace-nowrap ml-[52px]">
              {icon.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
