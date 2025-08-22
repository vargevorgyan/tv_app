import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export const Button = ({ children, className }: Props) => {
  return (
    <button
      className={clsx(
        'bg-white pt-[25px] pb-[15px] text-black min-w-[240px] rounded-full font-bold text-[32px] flex items-center justify-center',
        className
      )}
    >
      {children}
    </button>
  )
}
