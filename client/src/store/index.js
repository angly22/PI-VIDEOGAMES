import { createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'; // me traigo la devtools para evitar traerme todo este componente window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import thunk from "redux-thunk";
import rootReducer from '../reducers/reducer';



export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

