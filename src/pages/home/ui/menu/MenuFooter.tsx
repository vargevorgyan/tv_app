export const MenuFooter = () => {
  return (
    <ul className="flex w-0 group-hover:w-auto group-hover:opacity-100 opacity-0 transition-all duration-300 text-gray font-bold flex-col gap-6 mt-auto text-2xl">
      <li>
        <button>Language</button>
      </li>
      <li>
        <a href="#" className="whitespace-nowrap">
          get help
        </a>
      </li>
      <li>
        <button>Exit</button>
      </li>
    </ul>
  )
}
