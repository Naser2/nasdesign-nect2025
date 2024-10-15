'use client';

import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';

export default function Notification({ notification }) {
  const [show, setShow] = useState(true);

  console.log("NOTIFICATION", notification);

  if (!notification) {
    return null; // Early return if notification is undefined
  }

  return (
    <Link href={`/messages/${notification.messageId}`}
      aria-live="assertive"
      className="relative w-full pointer-events-none flex items-end px-4 p-2 lg:py-6 sm:items-start md:p-4"
    >
      <div className={clsx(notification?.read ? "bg-slate-200" : "bg-white", "flex w-full flex items-center space-y-4 sm:items-end")}>
        <Transition show={show}>
          <div className="pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
            <div className="w-0 flex-1 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <Image
                    alt=""
                    src={notification.avatar}
                    className="h-10 w-10 rounded-full"
                    height="40"
                    width="40"
                  />
                </div>
                <div className="ml-3 w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.read ? 'read' : 'new'}</p>
                  <p className="text-sm font-medium text-gray-900">{notification.name}</p>
                  <p className="mt-1 text-sm text-gray-500">{notification.message}</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Reply
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Link>
  );
}
