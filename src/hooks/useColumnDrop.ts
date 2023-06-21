import { useDrop } from "react-dnd";
import { columnType, ItemType } from "../utils/enum";
import { DragItem, TaskModel } from "../utils/interfaces";

function useColumnDrop(
    column: columnType,
    handleDrop: (fromColumn: columnType, taskId: TaskModel["id"]) => void,
) {
    const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>({
        accept: ItemType.TASK,
        drop: (dragItem) => {
            if (!dragItem || dragItem.from === column) {
                return;
            }
            handleDrop(dragItem.from, dragItem.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    })

    return {
        isOver,
        dropRef
    }
}

export default useColumnDrop;