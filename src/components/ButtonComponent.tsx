'use client';
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

import Link from 'next/link'
import clsx from 'clsx'
import React, { forwardRef, Fragment, useState, ReactNode, type Ref } from 'react'


import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import { ArrowLeftIcon, ArrowRight } from './icons/Arrows'
// import { Button } from '@/components/Button'

interface ButtonComponentProps {
  loading: boolean;
  disabled?: boolean;
  onClick: () => void;
  label?: string;
  children?: ReactNode;
  variant?: string;
  className?: string;
}

interface ButtonArrowProps {
  variant?: string;
  className?: string;
  children?: ReactNode;
  arrow?: "left" | "right";
  rounded?: string | null;
  href?: string;
}

interface CommomButtonMdProps {
  text: string;
  srText?: string;
  arrow?: "left" | "right";
  className?: string;
  theme: {
    bg?: string;
    text?: string;
  };
}

interface ActionAbleButtonProps {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showSendingBtn: boolean;
  btnText?: string;
  fetchingBtnText?: string;
}


export default function ButtonComponent({
  loading,
  disabled = false,
  onClick,
  label,
  children,
  variant,
  className,
}: ButtonComponentProps) {
  return (
    <Button
      className={`${!variant ? 'bg-black dark:bg-neutral-900' : 'text-black-500'} dark:text-white ${className}`}
      variant={variant}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {!loading && (
        <>
          {children}
          {label}
        </>
      )}
      {loading && <Loader2 className="animate-spin" />}
    </Button>
  );
}





function ArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

const variantStyles = {
  add: 'flex dark:shadow-sm shadow-gray-300/90  text-slate-800 shadow-xl  hover:text-black bg-gray-300/90    hover:bg-gray-300 items-center border border-black    dark:bg-gray-500/90  text-sm font-bold text-black  active:text-blue-200  border-sky-800/30  dark:border-sky-800/30  dark:text-slate-100 dark:hover:text-white',
  default:
    'flex items-center border border-black bg-slate-900  text-sm font-bold text-black text-white active:text-blue-200  dark:border-sky-800/30 dark:bg-white  dark:text-black dark:hover:text-sky-600',
  primary:
    'bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-black dark:text-white dark:ring-1 dark:ring-inset dark:ring-blue-400/20 dark:hover:bg-black dark:hover:text-white dark:hover:ring-blue-300',
  secondary:
    ' bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    ' bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400',
  transparent:
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  outline:
    ' py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500',
}

export function ButtonArrow({
  variant = 'default',
  className,
  children,
  arrow,
  rounded,
  href,
  ...props
}: ButtonArrowProps) {
  const Component = href ? Link : 'button';

  className = clsx(
    className,
    rounded ?? 'rounded-full',
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variant && variantStyles[variant]
  );

  const arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  );

  return (
    <Component
      className={className}
      {...props}
      id={variant || 'default-btn'}
      href={href}
    >
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  );
}



export function CommomButtonMd({ href, className, ...props }) {
  // console.log('BTN PPROPS', props)
  return (
    <div
      id={`${props.text}` ?? 'action-btn'}
      className={clsx(className, 'px-2')}
    >
      <Link
        className={clsx(
          props.theme.bg ?? variantStyles.primary,
          props.theme.text ?? 'text-pink-600',
          'group inline-flex h-9 items-center whitespace-nowrap rounded-full px-3 text-sm font-semibold  focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500'
        )}
        href="/docs/configuration"
      >
        {props.arrow == 'left' && (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 -ml-1 h-5 w-5 rotate-180"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
        )}
        {props.text}
        <span className="sr-only">
          {props.srText ? props.srText : 'a button'}
        </span>
        {props.arrow == 'right' && (
          <svg
            className="ml-3 overflow-visible text-pink-300 group-hover:text-pink-400 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        )}
      </Link>
    </div>
  )
}



export const ActionAbleButton = ({
  handleSubmit,
  showSendingBtn,
  btnText,
  fetchingBtnText,
}: ActionAbleButtonProps) => {
  return (
    <div className="mt-6 flex items-center justify-center">
      {!showSendingBtn && (
        <button
          type="button"
          className="inline-flex w-32 items-center rounded-md bg-slate-900 px-10 py-2 text-center text-sm font-semibold leading-6 text-white shadow hover:bg-black"
          disabled={showSendingBtn && true}
          onClick={handleSubmit}
        >
          {btnText ?? 'Send'} <ArrowRight color="text-white" className={undefined} />
        </button>
      )}

      {showSendingBtn && (
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold leading-6 text-white shadow hover:bg-slate-900"
          disabled={true}
        >
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-orange-400 motion-reduce:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {fetchingBtnText ?? ' Sending...'}
          <ArrowRight color="text-white" className={undefined} />
        </button>
      )}
    </div>
  );
};


export const ButtonTwins = ({
  textR,
  hrefL,
  hrefR,
  textL,
  children,
}: {
  textR: string;
  hrefL: string;
  hrefR: string;
  textL: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="not-prose mb-16 mt-6 flex gap-3">
      {/* Use ButtonArrow instead of Button */}
      <ButtonArrow href={hrefL} arrow="right" className={undefined}  rounded={undefined}>
        {textR}
        {children}
      </ButtonArrow>
      <ButtonArrow href={hrefR} variant="outline" className={undefined}  rounded={undefined}>
        {textL}
        {children}
      </ButtonArrow>
    </div>
  );
};

// export const NextButton = ({ text, href, customize, textStyle }) => {
//   return (
//     <Link
//       href={href}
//       className="bg-gray-yt nline-flex justify-center rounded-full  py-1 px-4 pl-5 text-sm font-semibold text-white"
//     >
//       <span>
//         <span className="flex items-center">
//           Next
//           <svg
//             className={clsx(
//               textStyle
//                 ? [textStyle, 'h-5 w-5 py-0.5 pl-1']
//                 : ' h-5 w-5 py-0.5 pl-1 text-gray-700 dark:text-slate-400'
//             )}
//             x-description="Heroicon name: mini/chevron-right"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
//               clip-rule="evenodd"
//             ></path>
//           </svg>
//         </span>
//       </span>
//     </Link>)
// }

// export const GoBack = ({ previousPathname, text }) => {

//   let router = useRouter()

//   return (
//     <>
//       {previousPathname && (
//         <div className=" not-prose  relative mb-16 mt-6 gap-3">
//           <Button
//             onClick={() => router.back()}
//             href={previousPathname}
//             arrow="left"
//             className={'bg-gray-yt'}
//           >
//             {text ?? ''}
//           </Button>
//         </div>
//       )}
//       {!previousPathname && (
//         <div className="max-w-10xl mt-2 lg:ml-4">
//           <Link
//             type="link"
//             href={'/projects/'}
//             aria-label="No-previous-pathname-go-to-project"
//             className="bg-gray-yt group h-10 w-10 items-center justify-center rounded-full"
//           >
//             <ArrowLeftIcon className="h-4 w-4 stroke-black text-sky-600 transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8" />
//           </Link>
//         </div>
//       )}
//     </>
//   )
// }

// export const PageCommonPaginators = ({ text, href, previousPathname }) => {
//   let router = useRouter()
//   let previousPath = previousPathname ?? 'router.previousPathname'
//   console.log('COOMPAGE PROPS:', text, href, ' useRouter().pathname')
//   return (
//     <div
//       id="section-top-item-and-go-back"
//       className="my-6 flex grid max-w-4xl grid-cols-[1fr,auto]  items-center md:mr-10 md:max-w-4xl lg:mt-10 lg:mb-20"
//     ><></>
//       {/* <GoBack previousPathname={previousPath} />
//       <NextButton text={text} href={href} /> */}
//     </div>
//   )
// }



// import { courseNavigation } from '@/components/Navigation'

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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

export function FeedbackButton(props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className="hover:bg-zinc-900/2.5 px-3 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}



// FeedbackForm with correct typing for ref
const FeedbackForm = forwardRef(function FeedbackForm(
  { onSubmit, message, question }: { onSubmit: any; message: string; question?: string },
  ref: Ref<HTMLDivElement>
) {
  return (
    <div id="FEEDBACK-FORM" ref={ref}>
      {question ? (
        <form
          onSubmit={onSubmit}
          className="overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10"
        >
          <button
            type="submit"
            className="hover:bg-zinc-900/2.5 justify-center px-3 py-1 text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            data-response="yes"
          >
            {question}
          </button>
        </form>
      ) : (
        <form
          onSubmit={onSubmit}
          className="flex items-center justify-center gap-6 md:justify-start"
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
          <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
            <FeedbackButton data-response="yes">Yes</FeedbackButton>
            <div className="bg-zinc-900/10 dark:bg-white/10" />
            <FeedbackButton data-response="no">No</FeedbackButton>
          </div>
        </form>
      )}
    </div>
  );
});

// FeedbackMessage with correct forwardRef usage
const FeedbackMessage = forwardRef(function FeedbackMessage(
  { feedbackStatus }: { feedbackStatus: string },
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className="justify-center md:justify-start">
      <div className="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
        {feedbackStatus}
      </div>
    </div>
  );
});


export const Feedback = React.forwardRef(
  ({ message, feedbackStatus, question }, props) => {
    let [submitted, setSubmitted] = useState(false)

    function onSubmit(event) {
      event.preventDefault()

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
