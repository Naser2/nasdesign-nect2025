import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Button, ButtonTwins, Feedback, FeedbackMessage } from '../ButtonComponent'
import { Add } from '@/components/icons/Add'

// export const FeedBack = ({ feedback }) => {
//   return (
//     <div class="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pr-3 pl-1.5 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-white dark:ring-emerald-500/30">
//       <svg
//         viewBox="0 0 20 20"
//         aria-hidden="true"
//         class="h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-100/20 dark:stroke-emerald-100"
//       >
//         <circle cx="10" cy="10" r="10" stroke-width="0"></circle>
//         <path
//           fill="none"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="1.5"
//           d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
//         ></path>
//       </svg>
//       {feedback}
//     </div>
//   )
// }
const AddTaskForm = ({ addTask, todosLength, createNewList }) => {
  const [value, setValue] = useState('')
  const todoFormRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    value && addTask(value)
    setValue('')
  }

  return (
    <div class="opacity-1 relative z-50 mt-2 py-2 ">
      {/* <Feedback
        message="Mark completed and Remove task"
        feedbackStatus="success"
      /> */}
      {todosLength !== 2 ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between pl-2 md:pl-4 pb-4"
        >
          <input
            className="flex flex-shrink-0 rounded-md text-slate-600 min-w-[260px]  sm:min-w-[223px] px-2 md:px-4"
            type="text"
            value={value}
            placeholder="Enter a title for this task"
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="pt-2 pr-5 mx-2 ">
            <Button type="submit" variant="add">
              <Add />
            </Button>
          </span>
        </form>
      ) : (
        <div
          id="DONE"
          onSubmit={handleSubmit}
          className="flex items-center justify-between pl-2"
        >
          {' '}
          <Feedback
            message="success"
            question="Completed ?"
            feedbackStatus="Well Done"
          />
          {/* <FeedbackMessage feedbackStatus="Mark completed and Remove task" /> */}
          <span className="pt-2 pr-5">
            <Button
              rounded="rounded-md"
              onClick={createNewList}
              className="flex items-stretch justify-end px-2  py-1 dark:bg-slate-800/40  dark:text-slate-800 sm:dark:text-slate-900 md:m-1"
            >
              Add new list ?
            </Button>
          </span>
        </div>
        // <>

        //   <FeedbackMessage feedbackStatus="Mark completed and Remove task" />
        //   <div className="items-center justify-between pl-2">
        //     <div className="flex-shrink-0 bg-orange-400 text-slate-600 sm:min-w-[315px]">
        //       <span className="pt-2 pr-5">
        //         <Button type="submit"></Button>
        //       </span>
        //     </div>
        //   </div>
        // </>
      )}
    </div>
  )
}

export default function TaskForm({}){
  const [tasks, setTasks] = useState([
    { id: 1, todo: 'Buy Carrots 🥕', taskCompleted: true },
  ])
  const [taskListName, setTaskListName] = useState('')
  const [completedTasks, setCompletedTasks] = useState([])
  const [dateTime, setDateTime] = useState('')

  const addTask = (todo) => {
    console.log('ADD_todo FIRED', todo)

    setTasks([
      ...tasks,
      { id: tasks.length + 1, todo: todo, taskCompleted: false },
    ])
  }

  // const setComplettedTasks = (index) => {
  //   const completedTasks = [...tasks]
  //   completedTasks[index].taskCompleted = !newTasks[index].taskCompleted
  //   setCompletedTasks(newTasks)
  // }

  const removeTask = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }
  function completeTask(taskId) {
    console.log('ID', taskId)
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === taskId) {
        task.taskCompleted = !task.taskCompleted
        console.log('Task Found & Upodated', taskId)
        // let completedtask = tasks[task.id].taskCompleted === true
        // setCompletedTasks([...completedTasks], completedtask)
      }

      return task
    })

    console.log('updatedTasks', updatedTasks)
    setTasks(updatedTasks)
  }
  const createNewList = (e) => {
    alert('fired')
    e.preventDefault()

    setTasks([])
    setTaskListName('New task list')
  }

  // let currentDate = new Date()
  // let time =
  //   currentDate.getHours() +
  //   ':' +
  //   currentDate.getMinutes() +
  //   ':' +
  //   currentDate.getSeconds()

  const timeAgo = useEffect(() => {
    let current = new Date()
    let cDate =
      current.getFullYear() +
      '-' +
      (current.getMonth() + 1) +
      '-' +
      current.getDate()
    let cTime =
      current.getHours() +
      ':' +
      current.getMinutes() +
      ':' +
      current.getSeconds()
    let dateTm = cDate + ' ' + cTime
    // console.log(dateTime)
    // console.log('TIMESTAMP', dateTime)

    setDateTime(dateTm)
  }, [dateTime])

  return (
    <div className="todo-list md:dark:bg-gray-200 bg-gray-50 py-0 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 sm:bg-slate-100 sm:dark:bg-slate-800">
      <div id="todo-statement" className="bg-gray-900 dark:bg-gray-600 ">
        <h1
          className="text-orange-wheat  md:dark:bg-slate-800 pb-4 pt-2  text-3xl font-bold font-bold text-white 
         leading-7 pt-4 px-4 tracking-tight dark:text-slate-200 sm:px-4  md:text-4xl"
        >
          {taskListName !== '' ? taskListName : 'Todos'}
          {taskListName !== '' && (
            <span
              id="add-a-new-task-list"
              className=" -mt-4 mb-4 max-w-2xl  py-2 pl-4 text-base text-slate-700 dark:text-slate-300 sm:text-lg "
            >
              Add task to list.
            </span>
          )}
        </h1>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className={clsx(
            // task.taskCompleted && 'bg-gray-200',
            'group relative my-0 flex-col overflow-hidden border-b-slate-500 text-center hover:bg-gray-100/10  md:hover:border-slate-400'
          )}
        >
          <div
            id="mark-task-complete"
            className={clsx('flex items-center justify-between ')}
          >
            <span className="flex-shrink-0 px-4">
              <span
                className={clsx(
                  task.taskCompleted
                    ? 'text-slate-800 dark:text-slate-600'
                    : 'group justify-start text-lg font-medium leading-4 text-slate-800  dark:text-gray-100 sm:text-slate-700'
                )}
              >
                {task.todo}
              </span>
            </span>
            <span className="flex space-x-12 px-2 py-1 md:m-1">
              <div
                id="task-name"
                className="flex items-stretch justify-end rounded-t-[10px]  md:left-auto md:m-1 md:rounded-lg"
              >
                <span className="">
                  <button
                    onClick={() => completeTask(task.id)}
                    className={clsx(
                      'flex justify-end',
                      task.taskCompleted
                        ? 'rounded-full  bg-teal-100 text-base text-teal-400 dark:bg-teal-600 '
                        : 'rounded-full  bg-gray-100/90 px-2 py-0 text-sm text-gray-600/70 '
                    )}
                  >
                    {task.taskCompleted ? (
                      <FeedbackMessage
                        // ref={todoFormRef}
                        message="Mark Completed ?"
                        feedbackStatus="Done"
                      />
                    ) : (
                      <Feedback
                        // ref={todoFormRef}
                        question="Completed ?"
                        feedbackStatus="success"
                      />
                    )}
                  </button>
                </span>
              </div>
            </span>
          </div>
          <div
            id="status-remove-task"
            className="flex items-center justify-between "
          >
            {task && (
              <span className="flex-shrink-0 px-4 dark:text-slate-600">
                <span className="text-md justify-start  font-normal leading-4 text-gray-200 dark:text-gray-100 ">
                  <span
                    className={clsx(
                      task.taskCompleted
                        ? 'text-slate-400'
                        : 'text-slate-500/90'
                    )}
                  >
                    {dateTime}
                  </span>
                  <span className="mx-2 text-xs font-normal leading-4 text-gray-600 dark:text-gray-500 ">
                    (5h ago)
                  </span>
                </span>
              </span>
            )}
            <span className="flex space-x-12 px-2 py-1 md:m-1">
              <div id="remopve-todo" className=" left-auto z-10 ">
                <Button
                  rounded="rounded-md"
                  onClick={() => removeTask(index)}
                  className="flex items-stretch justify-end px-2  py-1 dark:bg-slate-800/40  dark:text-slate-800 sm:dark:text-slate-900 md:m-1"
                >
                  Remove
                </Button>
              </div>
            </span>
          </div>
          <div id="separator " className="relative"></div>
        </div>
      ))}
      <AddTaskForm
        addTask={addTask}
        todosLength={tasks.length}
        createNewList={createNewList}
      />
    </div>
  )
}
