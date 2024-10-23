import { createReducer, on } from "@ngrx/store";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook } from "./book.actions";
import { Book } from "../models/book";
import { state } from "@angular/animations";

export const intitalState : Book[] = []

export const BookReducer = createReducer(
    intitalState,
    on(AddBook, (state) => {return state}),
    
    on(AddBookSuccess, (state, {id, title, author}) => [...state,{id, title, author}]),

    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
    }),


    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
)