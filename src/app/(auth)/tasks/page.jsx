import { Button } from "@/components/button";
import { PlusIcon } from "lucide-react";

const AddNewTask = () =>{
    return  <div className="inline-flex space-x-6 mt-8">
              <Button href='/archive'
                    variant={"secondary"}
                    className="dark:text-white" >
                   <PlusIcon className="pr-2"/>New task
            </Button>
        </div>
}

const sidebarSections = [
    {
      type: 'header',
      label: 'Chat history',
      className: 'draggable relative h-full w-full flex-1 items-start border-white/20',
    },
    {
      type: 'button',
      label: 'Close sidebar',
      icon: 'close',
      className: 'h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary enabled:hover:bg-token-sidebar-surface-secondary no-draggable',
      testId: 'close-sidebar-button',
    },
    {
      type: 'button',
      label: 'New chat',
      icon: 'add',
      className: 'h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary enabled:hover:bg-token-sidebar-surface-secondary',
      testId: 'create-new-chat-button',
    },
    {
      type: 'link',
      label: 'ChatGPT',
      icon: 'chat',
      href: '/',
      className: 'group flex h-10 items-center gap-2.5 rounded-lg font-normal bg-token-sidebar-surface-primary px-2 hover:bg-token-sidebar-surface-secondary',
      dataDiscover: 'true',
    },
    {
      type: 'section',
      label: 'Yesterday',
      items: [
        {
          type: 'link',
          label: 'TypeScript Models Review',
          href: '/c/671020ad-4a1c-8009-a5c3-abbf9099b625',
          testId: 'history-item-0',
        },
      ],
    },
    {
      type: 'section',
      label: 'Previous 7 Days',
      items: [],
    },
    {
      type: 'section',
      label: 'June',
      items: [
        {
          type: 'link',
          label: 'HomeChef Video: African Cuisine',
          href: '/c/bc0ed030-1c40-4da6-befc-9ff53b981376',
          testId: 'history-item-0',
        },
        {
          type: 'link',
          label: 'SlideInFromLeft Animation useEffect',
          href: '/c/5991c30f-2530-427b-91c8-b3bdbda74115',
          testId: 'history-item-1',
        },
        {
          type: 'link',
          label: 'Convert HTML to JSX',
          href: '/c/1fe92554-2bae-4a44-84ff-c0e5078c4a26',
          testId: 'history-item-2',
        },
        {
          type: 'link',
          label: 'Programs List Conversion',
          href: '/c/eb02b68e-ba4b-4989-8959-965b1ca12fb0',
          testId: 'history-item-3',
        },
        {
          type: 'link',
          label: 'Observing African American Success',
          href: '/c/421085ec-a033-4ae5-869b-64ad63932cd4',
          testId: 'history-item-4',
        },
      ],
    },
    {
      type: 'team',
      label: 'Add Team workspace',
      description: 'Collaborate on a Team plan',
      className: 'group flex gap-2 p-2.5 text-sm cursor-pointer focus:ring-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center hover:bg-token-sidebar-surface-secondary m-0 rounded-lg px-2',
    },
  ];
  
  const RenderSidebar = () => {
    return <div>
              <div className="flex justify-between flex h-[60px] items-center md:h-header-height">
                  <span className="flex" data-state="closed">
                    <button
                      aria-label="Close sidebar"
                      data-testid="close-sidebar-button"
                      className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary enabled:hover:bg-token-sidebar-surface-secondary no-draggable"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-xl-heavy max-md:hidden"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.85719 3H15.1428C16.2266 2.99999 17.1007 2.99998 17.8086 3.05782C18.5375 3.11737 19.1777 3.24318 19.77 3.54497C20.7108 4.02433 21.4757 4.78924 21.955 5.73005C22.2568 6.32234 22.3826 6.96253 22.4422 7.69138C22.5 8.39925 22.5 9.27339 22.5 10.3572V13.6428C22.5 14.7266 22.5 15.6008 22.4422 16.3086C22.3826 17.0375 22.2568 17.6777 21.955 18.27C21.4757 19.2108 20.7108 19.9757 19.77 20.455C19.1777 20.7568 18.5375 20.8826 17.8086 20.9422C17.1008 21 16.2266 21 15.1428 21H8.85717C7.77339 21 6.89925 21 6.19138 20.9422C5.46253 20.8826 4.82234 20.7568 4.23005 20.455C3.28924 19.9757 2.52433 19.2108 2.04497 18.27C1.74318 17.6777 1.61737 17.0375 1.55782 16.3086C1.49998 15.6007 1.49999 14.7266 1.5 13.6428V10.3572C1.49999 9.27341 1.49998 8.39926 1.55782 7.69138C1.61737 6.96253 1.74318 6.32234 2.04497 5.73005C2.52433 4.78924 3.28924 4.02433 4.23005 3.54497C4.82234 3.24318 5.46253 3.11737 6.19138 3.05782C6.89926 2.99998 7.77341 2.99999 8.85719 3ZM6.35424 5.05118C5.74907 5.10062 5.40138 5.19279 5.13803 5.32698C4.57354 5.6146 4.1146 6.07354 3.82698 6.63803C3.69279 6.90138 3.60062 7.24907 3.55118 7.85424C3.50078 8.47108 3.5 9.26339 3.5 10.4V13.6C3.5 14.7366 3.50078 15.5289 3.55118 16.1458C3.60062 16.7509 3.69279 17.0986 3.82698 17.362C4.1146 17.9265 4.57354 18.3854 5.13803 18.673C5.40138 18.8072 5.74907 18.8994 6.35424 18.9488C6.97108 18.9992 7.76339 19 8.9 19H9.5V5H8.9C7.76339 5 6.97108 5.00078 6.35424 5.05118ZM11.5 5V19H15.1C16.2366 19 17.0289 18.9992 17.6458 18.9488C18.2509 18.8994 18.5986 18.8072 18.862 18.673C19.4265 18.3854 19.8854 17.9265 20.173 17.362C20.3072 17.0986 20.3994 16.7509 20.4488 16.1458C20.4992 15.5289 20.5 14.7366 20.5 13.6V10.4C20.5 9.26339 20.4992 8.47108 20.4488 7.85424C20.3994 7.24907 20.3072 6.90138 20.173 6.63803C19.8854 6.07354 19.4265 5.6146 18.862 5.32698C18.5986 5.19279 18.2509 5.10062 17.6458 5.05118C17.0289 5.00078 16.2366 5 15.1 5H11.5ZM5 8.5C5 7.94772 5.44772 7.5 6 7.5H7C7.55229 7.5 8 7.94772 8 8.5C8 9.05229 7.55229 9.5 7 9.5H6C5.44772 9.5 5 9.05229 5 8.5ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H6C5.44772 13 5 12.5523 5 12Z"
                          fill="currentColor"
                        />
                      </svg>
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-xl-heavy md:hidden"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </span>
                  <div className="flex">
                    <span className="flex" data-state="closed">
                      <button
                        aria-label="New chat"
                        data-testid="create-new-chat-button"
                        className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary enabled:hover:bg-token-sidebar-surface-secondary"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon-xl-heavy"
                        >
                          <path
                            d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
   {sidebarSections.map((section, index) => {
      switch (section.type) {
        case 'header':
          return (
            <h2
              key={index}
              className={section.className}
              style={{
                position: 'absolute',
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal',
              }}
            >
              {section.label}
            </h2>
          );
        case 'button':
          return (
            <button
              key={index}
              aria-label={section.label}
              className={section.className}
              data-testid={section.testId}
            >
              {/* Render the button's SVG icon based on the type here */}
              {section.label}
            </button>
          );
        case 'link':
          return (
            <a
              key={index}
              href={section.href}
              className={section.className}
              data-discover={section.dataDiscover}
            >
              {/* Render link content here */}
              {section.label}
            </a>
          );
        case 'section':
          return (
            <div key={index} className="relative mt-5 first:mt-0 last:mb-5">
              <div className="sticky bg-token-sidebar-surface-primary top-0 z-20">
                <span className="flex h-9 items-center">
                  <h3 className="px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all pt-3 pb-2 text-token-text-primary">
                    {section.label}
                  </h3>
                </span>
              </div>
              <ol>
                {section.items.map((item, subIndex) => (
                  <li key={subIndex} className="relative">
                    <a href={item.href} className="flex items-center gap-2 p-2">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          );
        case 'team':
          return (
            <a
              key={index}
              className={section.className}
            >
              <span className="flex items-center gap-2">
                {section.label}
              </span>
              <span className="text-xs">{section.description}</span>
            </a>
          );
        default:
          return null;
      }
    })}
    </div>
   
  };
  
  // JSX Usage: <div>{renderSidebar()}</div>

  
const createTaskPage = () => {
    return <div className="">
    {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-itunes-app" content="app-id=6448311069" />
    <title>TypeScript Models Review</title>
    <title>ChatGPT</title>
    <meta
      name="description"
      content="ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more."
    />
    <meta
      name="keyword"
      content="ai chat,ai,chap gpt,chat gbt,chat gpt 3,chat gpt login,chat gpt website,chat gpt,chat gtp,chat openai,chat,chatai,chatbot gpt,chatg,chatgpt login,chatgpt,gpt chat,open ai,openai chat,openai chatgpt,openai"
    />
    <meta
      property="og:description"
      content="A conversational AI system that listens, learns, and challenges"
    />
    <meta property="og:title" content="ChatGPT" />
    <meta
      property="og:image"
      content="https://cdn.oaistatic.com/assets/chatgpt-share-og-u7j5uyao.webp"
    />
    <meta property="og:url" content="https://chatgpt.com" /> */}
    {/* <title>ChatGPT</title> */}
    <div className="relative flex h-full w-full overflow-hidden transition-colors z-0">
     
     

      <div  className="!w-[320px] dark:!bg-[#1e1f20] h-[100vh] bard-sidenav[_ngcontent-ng-c1631036836] z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0"
        style={{ width: 260 }}
      >
        <div className="h-full w-[260px]">
          <div className="flex h-full min-h-0 flex-col">
            <div className="draggable relative h-full w-full flex-1 items-start border-white/20">
              {/* <h2
                style={{
                  position: "absolute",
                  border: 0,
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  wordWrap: "normal"
                }}
              >
                Chat history
              </h2> */}
        
                <nav className="flex h-full w-full flex-col px-3" aria-label="Chat history">
                    <AddNewTask/>
                      <bard-sidenav  className="bard-sidenav ng-tns-c2350791624-8 ng-trigger ng-trigger-widthTransition ng-star-inserted" 
                            _ngcontent-ng-c1631036836="" 
                            role="navigation" _nghost-ng-c2350791624="" 
                           
                            jslog="173918;track:impression"
                            style={{"width": "var(--bard-sidenav-open-width);"}}>
                        <div _ngcontent-ng-c1631036836="" className="sidenav-with-history-container ng-star-inserted expanded" >
                        <RenderSidebar/>
                        </div>
                    </bard-sidenav>
              </nav>
            </div>
          </div>
        </div>
      </div>


      <div className="relative flex h-full max-w-full flex-1 flex-col overflow-hidden">
        <div className="draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden">
         {/*  <div className="no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center">
            <button
              type="button"
              className="inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50"
              data-testid="open-sidebar-button"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-lg mx-2 text-token-text-secondary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="no-draggable">
            <button
              aria-label="Model selector, current model is 4o"
              type="button"
              id="radix-:rq:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              data-testid="model-switcher-dropdown-button"
              className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"
            >
              <div className="text-token-text-secondary">
                ChatGPT <span className="text-token-text-secondary">4o</span>
              </div>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-md text-token-text-tertiary"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div> */}
          <div className="no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center">
            <span className="flex" data-state="closed">
              <button
                aria-label="New chat"
                className="h-10 rounded-lg px-2 text-token-text-secondary focus-visible:outline-0 disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary enabled:hover:bg-token-sidebar-surface-secondary"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-xl-heavy"
                >
                  <path
                    d="M15.6729 3.91287C16.8918 2.69392 18.8682 2.69392 20.0871 3.91287C21.3061 5.13182 21.3061 7.10813 20.0871 8.32708L14.1499 14.2643C13.3849 15.0293 12.3925 15.5255 11.3215 15.6785L9.14142 15.9899C8.82983 16.0344 8.51546 15.9297 8.29289 15.7071C8.07033 15.4845 7.96554 15.1701 8.01005 14.8586L8.32149 12.6785C8.47449 11.6075 8.97072 10.615 9.7357 9.85006L15.6729 3.91287ZM18.6729 5.32708C18.235 4.88918 17.525 4.88918 17.0871 5.32708L11.1499 11.2643C10.6909 11.7233 10.3932 12.3187 10.3014 12.9613L10.1785 13.8215L11.0386 13.6986C11.6812 13.6068 12.2767 13.3091 12.7357 12.8501L18.6729 6.91287C19.1108 6.47497 19.1108 5.76499 18.6729 5.32708ZM11 3.99929C11.0004 4.55157 10.5531 4.99963 10.0008 5.00007C9.00227 5.00084 8.29769 5.00827 7.74651 5.06064C7.20685 5.11191 6.88488 5.20117 6.63803 5.32695C6.07354 5.61457 5.6146 6.07351 5.32698 6.63799C5.19279 6.90135 5.10062 7.24904 5.05118 7.8542C5.00078 8.47105 5 9.26336 5 10.4V13.6C5 14.7366 5.00078 15.5289 5.05118 16.1457C5.10062 16.7509 5.19279 17.0986 5.32698 17.3619C5.6146 17.9264 6.07354 18.3854 6.63803 18.673C6.90138 18.8072 7.24907 18.8993 7.85424 18.9488C8.47108 18.9992 9.26339 19 10.4 19H13.6C14.7366 19 15.5289 18.9992 16.1458 18.9488C16.7509 18.8993 17.0986 18.8072 17.362 18.673C17.9265 18.3854 18.3854 17.9264 18.673 17.3619C18.7988 17.1151 18.8881 16.7931 18.9393 16.2535C18.9917 15.7023 18.9991 14.9977 18.9999 13.9992C19.0003 13.4469 19.4484 12.9995 20.0007 13C20.553 13.0004 21.0003 13.4485 20.9999 14.0007C20.9991 14.9789 20.9932 15.7808 20.9304 16.4426C20.8664 17.116 20.7385 17.7136 20.455 18.2699C19.9757 19.2107 19.2108 19.9756 18.27 20.455C17.6777 20.7568 17.0375 20.8826 16.3086 20.9421C15.6008 21 14.7266 21 13.6428 21H10.3572C9.27339 21 8.39925 21 7.69138 20.9421C6.96253 20.8826 6.32234 20.7568 5.73005 20.455C4.78924 19.9756 4.02433 19.2107 3.54497 18.2699C3.24318 17.6776 3.11737 17.0374 3.05782 16.3086C2.99998 15.6007 2.99999 14.7266 3 13.6428V10.3572C2.99999 9.27337 2.99998 8.39922 3.05782 7.69134C3.11737 6.96249 3.24318 6.3223 3.54497 5.73001C4.02433 4.7892 4.78924 4.0243 5.73005 3.54493C6.28633 3.26149 6.88399 3.13358 7.55735 3.06961C8.21919 3.00673 9.02103 3.00083 9.99922 3.00007C10.5515 2.99964 10.9996 3.447 11 3.99929Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div className="no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden" />
        <main className="relative h-full w-full flex-1 overflow-auto transition-width">
          <div
            role="presentation"
            tabIndex={0}
            className="composer-parent flex h-full flex-col focus-visible:outline-0"
          >
            <div className="flex-1 overflow-hidden">
              <div className="h-full">
                <div className="react-scroll-to-bottom--css-clfmz-79elbk h-full">
                  <div className="react-scroll-to-bottom--css-clfmz-1n7m0yu">
             
                    <div className="flex flex-col text-sm md:pb-9">
                  {/*           <div className="draggable no-draggable-children sticky top-0 p-3 mb-1.5 flex items-center justify-between z-10 h-header-height font-semibold bg-token-main-surface-primary max-md:hidden">
                        <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2" />
                        <div
                          className="flex items-center gap-0 overflow-hidden"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r2nm:"
                          data-state="closed"
                        >
                          <button
                            aria-label="Model selector, current model is 4o"
                            type="button"
                            id="radix-:r2nn:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                            data-testid="model-switcher-dropdown-button"
                            className="group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 px-3 text-lg hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary font-semibold text-token-text-secondary overflow-hidden whitespace-nowrap"
                          >
                            <div className="text-token-text-secondary">
                              ChatGPT{" "}
                              <span className="text-token-text-secondary">
                                4o
                              </span>
                            </div>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon-md text-token-text-tertiary"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center gap-2 pr-1 leading-[0]">
                          <button
                            className="btn relative btn-secondary text-token-text-primary"
                            data-testid="share-chat-button"
                          >
                            <div className="flex w-full items-center justify-center gap-1.5">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-sm"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L13 6.41421V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V6.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L11.2929 3.29289ZM4 14C4.55228 14 5 14.4477 5 15V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V15C3 14.4477 3.44772 14 4 14Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Share
                            </div>
                          </button>
                          <button
                            data-testid="profile-button"
                            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary focus-visible:outline-0"
                            type="button"
                            id="radix-:r2np:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            <div className="flex items-center justify-center overflow-hidden rounded-full">
                              <div className="relative flex">
                                <img
                                  alt="User"
                                  width={32}
                                  height={32}
                                  className="rounded-sm"
                                  referrerPolicy="no-referrer"
                                  src="https://s.gravatar.com/avatar/28ead734076907edf0116fc7d59f00e0?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwa.png"
                                />
                              </div>
                            </div>
                          </button>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent w-full">
              <div>
                <div className="m-auto text-base px-3 md:px-4 w-full md:px-5 lg:px-4 xl:px-5">
                  <div className="mx-auto flex flex-1 gap-4 text-base md:gap-5 lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]">
                    <form
                      className="w-full"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r317:"
                      data-state="closed"
                    >
                      <div className="relative flex h-full max-w-full flex-1 flex-col">
                        <div className="absolute bottom-full left-0 right-0 z-20" />
                        <div className="group relative flex w-full items-center">
                          <div className="absolute bottom-16 space-y-2 z-20" />
                          <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors contain-inline-size bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                            <div className="flex items-end gap-1.5 pl-4 md:gap-2">
                              <div
                                className="-ml-2.5 flex"
                                style={{ opacity: 1, willChange: "auto" }}
                              >
                                <div className="relative">
                                  <div className="relative">
                                    <div className="flex flex-col">
                                      <input
                                        multiple=""
                                        tabIndex={-1}
                                        className="hidden"
                                        type="file"
                                        style={{ display: "none" }}
                                      />
                                      <span className="hidden" />
                                      <button
                                        type="button"
                                        id="radix-:r318:"
                                        aria-haspopup="menu"
                                        aria-expanded="false"
                                        data-state="closed"
                                        className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0"
                                      />
                                      <span className="flex" data-state="closed">
                                        <span>
                                          <button
                                            className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary dark:text-white focus-visible:outline-black dark:focus-visible:outline-white mb-1"
                                            aria-disabled="false"
                                            aria-label="Attach files"
                                          >
                                            <svg
                                              width={24}
                                              height={24}
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
                                                fill="currentColor"
                                              />
                                            </svg>
                                          </button>
                                        </span>
                                      </span>
                                      <div
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="radix-:r31b:"
                                        data-state="closed"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex min-w-0 flex-1 flex-col">
                                <div className="_prosemirror-parent_15ceg_1 text-token-text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
                                  <textarea
                                    className="block h-10 w-full resize-none border-0 bg-transparent px-0 py-2 text-token-text-primary placeholder:text-token-text-secondary"
                                    placeholder="Message ChatGPT"
                                    style={{ display: "none" }}
                                    defaultValue={""}
                                  />
                                  <div
                                    contentEditable="true"
                                    translate="no"
                                    className="ProseMirror"
                                    id="prompt-textarea"
                                  >
                                    <p
                                      data-placeholder="Message ChatGPT"
                                      className="placeholder"
                                    >
                                      <br className="ProseMirror-trailingBreak" />
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-8">
                                <span className="" data-state="closed">
                                  <button
                                    disabled=""
                                    aria-label="Send prompt"
                                    data-testid="send-button"
                                    className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary disabled:bg-[#D7D7D7]"
                                  >
                                    <svg
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon-2xl"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="relative w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px]">
                  <div className="min-h-4">
                    <div>ChatGPT can make mistakes. Check important info.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group absolute bottom-2 end-2 z-20 hidden gap-1 md:flex lg:bottom-3 lg:end-3">
            <button
              className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary"
              type="button"
              id="radix-:r31d:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              data-testid="undefined-button"
            >
              ?
            </button>
          </div>
        </main>
      </div>
    </div>
    <div aria-live="assertive" aria-atomic="true" className="sr-only" />
    <div aria-live="polite" aria-atomic="true" className="sr-only" />
    <audio
      className="fixed bottom-0 left-0 hidden h-0 w-0"
      autoPlay=""
      crossOrigin="anonymous"
      src="blob:https://chatgpt.com/bbafc331-a2a9-47b9-95e5-7f774b933a83"
    />
    <span className="pointer-events-none fixed inset-0 z-[60] mx-auto my-2 flex max-w-[560px] flex-col items-stretch justify-start md:pb-5" />
    <iframe
      height={1}
      width={1}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        border: "none",
        visibility: "hidden"
      }}
    />
  </div>
  
}


export default  createTaskPage 