import * as React from 'react';
import {ChangeEvent} from 'react';
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "../../../../../../common/components/EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../../../../model/tasks-reducer";
import {TaskType} from "../../../../../../app/App";
import {getListItemSx} from "./Task.styles";
import {useAppDispatch} from "../../../../../../common/hooks/useAppDispatch";

type Props = {
    task:TaskType
    todolistId:string
};


    export const Task = ({task,todolistId}: Props) => {
    let{id,title,isDone} = task
    const dispatch = useAppDispatch()
    const removeTaskHandler = () => {
      dispatch(removeTaskAC({taskId:id, todolistId}))
    }
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
       dispatch(changeTaskStatusAC({taskId:id, isDone:newStatusValue, todolistId}))
    }
    const changeTaskTitleHandler = (title: string) => {
       dispatch(changeTaskTitleAC({taskId:id, title, todolistId}))
    }
    return (
        <ListItem key={id} sx={getListItemSx(isDone)}>
            <div>
                <Checkbox checked={isDone} onChange={changeTaskStatusHandler}/>
                <EditableSpan value={title} onChange={changeTaskTitleHandler}/>
            </div>
            <IconButton onClick={removeTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
};