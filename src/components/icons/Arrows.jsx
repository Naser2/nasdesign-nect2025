import clsx from 'clsx'

export default function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowUpIcon(props) {}

export function ArrowRight({ className, color }) {
  // console.log('Arrow Class: ' + color)
  return (
    <div id="svg-style" className={clsx(className)}>
      <svg
        className={clsx(color, 'h-5 w-5 flex-shrink-0 text-gray-500')}
        x-description="Heroicon name: mini/chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={clsx(color ? color : 'currentColor')}
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  )
}
export function ArrowLeftIcon({ className }, props, color, size) {
  return (
    <div id="svg-style" className={clsx(className)}>
      <svg
        className={clsx(
          className ? className : 'fill-white group-active:fill-white/80',
          {
            large: 'h-9 w-9',
            medium: 'h-7 w-7',
            small: 'h-5 w-5',
          }[size]
        )}
      >
        <path
          className={className}
          d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
