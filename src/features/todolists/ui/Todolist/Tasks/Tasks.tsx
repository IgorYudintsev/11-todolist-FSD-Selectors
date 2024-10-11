import List from "@mui/material/List";
import {TodolistType} from "../../../../../app/App";
import {Task} from "./Task/Task";
import {useAppSelector} from "../../../../../common/hooks/useAppSelector";
import {selectTask} from "../../../model/tasksSelectors";

type TasksType = {
    todolist: TodolistType
}

export const Tasks = ({
                          todolist,
                      }: TasksType) => {

    const {id: todilistID, title, filter} = todolist

    // const AllTasks = useAppSelector((state) => state.tasks)
    const AllTasks = useAppSelector(selectTask)


    let filteredTask = AllTasks[todilistID]
    if (filter === 'active') {
        filteredTask = AllTasks[todilistID].filter(task => !task.isDone)
    }

    if (filter === 'completed') {
        filteredTask = AllTasks[todilistID].filter(task => task.isDone)
    }

    return (
        <div>
            {
                filteredTask.length === 0
                    ? <p>Тасок нет</p>
                    : <List>
                        {filteredTask.map((task) => {
                            return (
                                <Task
                                    key={task.id}
                                    task={task}
                                    todolistId={todolist.id}
                                />
                            )
                        })}
                    </List>
            }
        </div>
    );
};
