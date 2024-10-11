import {EditableSpan} from "../../../../../common/components/EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {changeTodolistTitleAC, removeTodolistAC} from "../../../model/todolists-reducer";
import s from './TodolistTitle.module.css'
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";

type TodolistTitleType = {
    title: string,
    todolistId: string
}
export const TodolistTitle = ({title, todolistId}: TodolistTitleType) => {
    const dispatch = useAppDispatch()
    const removeTodolistHandler = () => {
        dispatch(removeTodolistAC(todolistId))
    }
    const updateTodolistHandler = (title: string) => {
        dispatch(changeTodolistTitleAC({id: todolistId, title}))
    }


    return (
        <div className={s.container}>
            <h3><EditableSpan value={title} onChange={updateTodolistHandler}/></h3>
            <IconButton onClick={removeTodolistHandler}>
                <DeleteIcon/>
            </IconButton>
        </div>
    );
};
