import  Notification from '@/components/notification/Notification'

const notifications = [
    {
      id: 1,
      name: 'Emilia Gates',
      message: 'Sure! 8:30pm works great!',
      messageId:'66e84aeda0dbe956ae24b006',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      link: '/messages/1',
      read:false,
    },
    {
      id: 2,
      name: 'John Doe',
      message: 'Let’s schedule a meeting.',
      messageId:'66edf11a3bedf79242f44ca3',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      link: '/messages/2',
      read:true,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        message: 'Can we talk about the project updates?',
        messageId:'66e84aeda0dbe956ae24b006',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        link: '/messages/3',
        read:false,
      },
      {
        id: 4,
        name: 'Michael Smith',
        message: 'Your application has been approved!',
        messageId:'66e84aeda0dbe956ae24b006',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        link: '/messages/4',
        read:false,
      },
      {
        id: 5,
        name: 'Sarah Williams',
        message: 'Don’t forget about our meeting tomorrow!',
        messageId:'66e84aeda0dbe956ae24b006',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        link: '/messages/5',
        read:true,
      },
      {
        id: 6,
        name: 'David Brown',
        messageId:'66edf11a3bedf79242f44ca3',
        message: 'New updates are available for your review.',
        avatar: 'https://images.unsplash.com/photo-1512488564502-b9c6f911dc35?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        link: '/messages/6',
        read:true,
      },
      { id: 7,
        name: 'Laura Garcia',
        messageId:'66edf11a3bedf79242f44ca3',
        message: 'Your feedback is appreciated on the last document.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        link: '/messages/7',
        read:false,
      },
  ];

  export default function NotificationsPage() {
    return (
      <div className='relative flex-block h-full w-full mx-auto'>
        <h1 className='p-4 '>Notifications</h1>
        <ul className='flex-block'>
          {notifications.map(notification => (
            <div className='flex-block' key={notification.id}>
              <Notification notification={notification} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
  