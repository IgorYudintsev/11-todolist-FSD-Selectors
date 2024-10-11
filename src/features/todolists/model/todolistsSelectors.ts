import {RootState} from "../../../app/store";
import {TodolistType} from "../../../app/App";

export const selectTdolist =(state:RootState):TodolistType[]=>state.todolists