import Link from 'next/link'
import clsx from 'clsx'
import React, { forwardRef, Fragment, useState } from 'react'

import { Transition } from '@headlessui/react'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline'
// import { Container } from '@/components/Container'
const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

export function buttonVariants({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  if (href) {
    return <Link href={href} className={className} {...props} />
  }

  return <button className={className} {...props} />
}
// export function buttonVariants({ variant = 'primary', className, href, ...props }) {
//   className = clsx(
//     'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
//     variantStyles[variant],
//     className
//   )

//   if (href) {
//     return <Link href={href} className={className} {...props} />
//   }

//   return <button className={className} {...props} />
// }


// export function FeedbackButton(props) {
//   return (
//     <button
//       type="submit"
//       className="hover:bg-zinc-900/2.5 px-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
//       {...props}
//     />
//   )
// }
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}
export function FeedbackButton(props) {
  return (
    <button
      type="submit"
      className="hover:bg-zinc-900/2.5 px-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

const FeedbackForm = forwardRef(function FeedbackForm(
  { onSubmit, likes, message, question },

  ref,
  props
) {
  return (
    <div id="FEEDBACK-FORM" ref={ref}>
      {question ? (
        <form
          onSubmit={onSubmit}
          className="overflow-hidden rounded-full border border-zinc-900/10 bg-white dark:border-white/10"
        >
          <button
            type="submit"
            className="hover:bg-zinc-900/2.5 justify-center px-3  py-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            data-response="thumbs-up"
          >
            {likes}
          </button>
        </form>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex items-center justify-center rounded-full bg-white md:justify-start md:gap-6 "
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{message}</p>

          <div className="flex grid  h-full w-full  min-w-[20px] grid-cols-[1fr,1px,1fr] rounded-full border border-zinc-900/10 py-1.5 dark:border-white/10">
            <FeedbackButton data-response="thumbs-up">
              {/* <span className="hidden">Yes</span> */}
              <div id="thumbs-up" className="flex h-6">
                <HandThumbUpIcon />
              </div>
            </FeedbackButton>
            <div className="bg-zinc-900/10 dark:bg-white/10" />
            <span className="hover:bg-zinc-900/2.5 px-2 px-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white">
              {likes}
            </span>
          </div>
        </form>
      )}
    </div>
  )
})

export const FeedbackMessage = forwardRef(function FeedbackMessage(
  _props,
  ref,
  feedbackStatus
) {
  let colors = {}
  const statusMessageColor = colors[feedbackStatus]
  console.log('MESSAGE props.FeedbackStatus', _props.feedbackStatus)
  return (
    <div ref={ref} className=" justify-center md:justify-start">
      <div className="emerald-500/20 flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30">
        <HandThumbUpIcon className="h-6 w-6 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />{' '}
        <span className="px-2 text-sm">{_props.likes}</span>
        {_props.feedbackStatus}
      </div>
    </div>
  )
})

export const Feedback = React.forwardRef(
  ({ likes, message, feedbackStatus, question, addLikes }, props) => {
    let [submitted, setSubmitted] = useState(false)

    function onSubmit(event) {
      event.preventDefault()
      addLikes()

      // event.nativeEvent.submitter.dataset.response
      // => "yes" or "no"

      setSubmitted(true)
      console.log('feedbackStatus', feedbackStatus)
    }

    return (
      <div className="relative h-8">
        <Transition
          show={!submitted}
          as={Fragment}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          leave="pointer-events-none duration-300"
        >
          <FeedbackForm
            likes={likes}
            onSubmit={onSubmit}
            message={message}
            question={question}
          />
        </Transition>
        <Transition
          show={submitted}
          as={Fragment}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          enter="delay-150 duration-300"
        >
          <FeedbackMessage
            likes={likes}
            message={message}
            feedbackStatus={feedbackStatus}
            // ref={ref}
          />
        </Transition>
      </div>
    )
  }
)

Feedback.displayName = 'Feedback'
