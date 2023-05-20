import { columnType } from "./enum";

export interface TaskModel {
    id: string;
    title: string;
    column: columnType;
    color: string
}