import {createStore} from 'redux'
import {reducer} from './reducer'

export function getClientStore() {

    let initState = window.context.state;
    return createStore(reducer,initState);
}
export function getServerStore() {
    return createStore(reducer);
}
