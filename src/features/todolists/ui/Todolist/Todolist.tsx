import {AddItemForm} from "../../../../common/components/AddItemForm/AddItemForm";
import {TodolistType} from "../../../../app/App";
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";
import {TodolistTitle} from "./TodolistTitle/TodolistTitle";
import {Tasks} from "./Tasks/Tasks";
import {addTaskAC} from "../../model/tasks-reducer";
import {useAppDispatch} from "../../../../common/hooks/useAppDispatch";


type PropsType = {
    todolist: TodolistType
}

export const Todolist = (props: PropsType) => {
    const {
        todolist: {id, title, filter},
    } = props
    const dispatch = useAppDispatch()

    const addTaskCallback = (title: string) => {
        dispatch(addTaskAC({title, todolistId: id}))
    }

    return (
        <div>
            <TodolistTitle
                title={title}
                todolistId={id}/>
            <AddItemForm addItem={addTaskCallback}/>
            <Tasks
                todolist={props.todolist}
            />
            <FilterTasksButtons
                todolist={props.todolist}
            />
        </div>
    )
}
