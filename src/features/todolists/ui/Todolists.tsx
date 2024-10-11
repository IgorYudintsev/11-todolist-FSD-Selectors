import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import {Todolist} from "./Todolist/Todolist";
import * as React from "react";
import {useAppSelector} from "../../../common/hooks/useAppSelector";
import {selectTdolist} from "../model/todolistsSelectors";

export const Todolists = () => {
    // const todolists = useAppSelector((state) => state.todolists)
    const todolists = useAppSelector(selectTdolist)

    return (
        <Grid container spacing={4}>
            {todolists.map((tl) => {
                return (
                    <Grid key={tl.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <Todolist
                                todolist={tl}
                                key={tl.id}
                            />
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    );
};
