export const Avatar = () => {
  return (
    <div className="flex w-0 overflow-hidden group-hover:w-auto opacity-0 group-hover:opacity-100 transition-all duration-300 mb-10 items-center gap-5">
      <img src="/assets/avatar.png" alt="logo" className="size-[82px]" />
      <span className="text-[32px] font-bold h-[26px] leading-none">
        Daniel
      </span>
    </div>
  )
}
