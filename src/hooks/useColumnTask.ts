import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { columnType } from "../utils/enum";
import { TaskModel } from "../utils/interfaces";
import useTaskCollection from "./useTaskCollection";
import { pickChakraRandomColor } from "../helpers/helper";

function useColumnTask(column: columnType) {
    const [tasks, setTasks] = useTaskCollection()
    const MAX_TASK_COLUMN = 100;

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
    return {
        tasks: tasks[column],
        addEmptyTask
    }
}

export default useColumnTask;