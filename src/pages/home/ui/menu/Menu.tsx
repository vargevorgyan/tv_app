import { Avatar } from './Avatar'
import { MenuFooter } from './MenuFooter'
import { MenuItems } from './MenuItems'

export const Menu = () => {
  return (
    <nav className="min-w-[116px] group h-full flex">
      <div className="h-full fixed flex left-[34px] flex-col items-start py-[60px] z-30">
        <Avatar />
        <MenuItems />
        <MenuFooter />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 h-full top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-app to-transparent z-20" />
    </nav>
  )
}
