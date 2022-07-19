import {render} from '@testing-library/react'
import reducer from "../reducers";
import * as React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AskLogin from './AskLogin'
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

describe('AskLogin',()=>{
    it('will match', ()=>{
        var view =render(
            <Provider store={store}>
                <Router>
                    <AskLogin />
                </Router>
            </Provider>
        );
        expect(view).toMatchSnapshot();
    });
  
})
