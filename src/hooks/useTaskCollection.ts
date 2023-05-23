import { v4 as uuidv4 } from 'uuid';
import { columnType } from "../utils/enum";
import { TaskModel } from '../utils/interfaces';
import { useLocalStorage } from 'usehooks-ts';

function useTaskCollection() {
    return useLocalStorage<{
        [key in columnType]: TaskModel[]

    }>("tasks", {
        Todo: [
            {
                id: uuidv4(),
                column: columnType.TO_DO,
                title: "task-1",
                color: "blue.300"
            }
        ],
        "In Progress": [
            {
                id: uuidv4(),
                column: columnType.IN_PROGRESS,
                title: "task-2",
                color: "yellow.300"
            }
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: columnType.BLOCKED,
                title: "task-3",
                color: "red.300"
            }
        ],
        completed: [
            {
                id: uuidv4(),
                column: columnType.COMPLETED,
                title: "task-4",
                color: "green.300"
            }
        ]
    })
}

export default useTaskCollection;