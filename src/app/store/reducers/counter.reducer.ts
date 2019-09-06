import { createReducer, on } from '@ngrx/store';
import { increase, decrease, reset, change } from '../actions/counter.actions';

export interface State {
    a: number;
    b: number;
};

export const initialState: State = {
    a: -5,
    b: 10,
};

const _counterReducer = createReducer(
    initialState,
    on(change, state => state ),
    on(increase, state => ({ ...state, a: state.a + 1 })),
    on(decrease, state => ({ ...state, b: state.b - 1 })),
    on(reset, state => ({...state, a: -5, b: 10 })),
);

export function CounterReducer(state, action) {
    return _counterReducer(state, action);
};