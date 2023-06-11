import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { columnType } from "../utils/enum";
import { TaskModel } from "../utils/interfaces";
import useTaskCollection from "./useTaskCollection";
import { pickChakraRandomColor } from "../helpers/helper";

function useColumnTask(column: columnType) {
    const [tasks, setTasks] = useTaskCollection()
    const MAX_TASK_COLUMN = 100;

    // for add task
    const addEmptyTask = useCallback(() => {
        console.log(`adding new empty task ${column} column`)
        setTasks((allTasks) => {
            const columnTasks = allTasks[column]
            if (columnTasks.length > MAX_TASK_COLUMN) {
                console.log("Too many tasks")
                return allTasks;
            }

            const newColumnTask: TaskModel = {
                id: uuidv4(),
                title: `New ${column} Task`,
                color: pickChakraRandomColor('.300'),
                column
            }
            return {
                ...allTasks,
                [column]: [newColumnTask, ...columnTasks]
            }
        })
    }, [column, setTasks]);

    // for update task
    const updateTask = useCallback((id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
        console.log(`updating task ${id} with ${JSON.stringify(updateTask)}`)
        setTasks((allTasks) => {
            const columnTasks = allTasks[column];
            return {
                ...allTasks,
                [column]: columnTasks.map((task) => task.id === id ? { ...task, ...updatedTask } : task)
            }
        })

    }, [column, setTasks])

    // for delete task
    const deleteTask = useCallback((id: TaskModel['id']) => {
        console.log(`Removing task with ${id}...`)

        setTasks((allTasks) => {
            const columnTasks = allTasks[column];
            return {
                ...allTasks,
                [column]: columnTasks.filter((task) => task.id !== id)
            }
        })
    }, [column, setTasks])

    return {
        tasks: tasks[column],
        addEmptyTask,
        updateTask,
        deleteTask

    }
}

export default useColumnTask;

