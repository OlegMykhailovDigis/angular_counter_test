import { increase, decrease, change, reset } from '../actions/counter.actions';
import { CounterReducer } from './counter.reducer';
import { Action } from '@ngrx/store';

describe('CounterReducer', () => {
    describe('unhadeled acton', () => {
        it('it should return unchanged state', () => {
            const initialState = {a: -5, b: 10};
            const action: Action = {} as Action;
            const state = CounterReducer(undefined, action);

            expect(state).toEqual(initialState);
        })
    });

    describe('change action', () => {
        it('it should return unchanged state', () => {
            const initialState = {a: -5, b: 10};
            const action: Action = change;
            const state = CounterReducer(initialState, action);

            expect(state).toEqual(initialState);
        })
    });

    describe('increase action', () => {
        it('it should increase a variable by 1', () => {
            const initialState = {a: -5, b: 10};
            const action: Action = increase;
            const state = CounterReducer(initialState, action);
    
            expect(state.a).toBe(++initialState.a);
        });
    });

    describe('decrease action', () => {
        it('it should decrease b variable by 1', () => {
            const initialState = {low: -5, b: 10};
            const action: Action = decrease;
            const state = CounterReducer(initialState, action);
    
            expect(state.b).toBe(--initialState.b);
        });
    });

    describe('reset action', () => {
        it('it should reset current state to initial', () => {
            const initialState = {a: -5, b: 10};
            const currentState = {a: initialState.a + 1, b: initialState.b - 1};
            const action: Action = reset;
            const state = CounterReducer(currentState, action);

            expect(state).toEqual(initialState);
        });
    });
});