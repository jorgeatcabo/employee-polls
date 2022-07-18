import {render} from '@testing-library/react'
import reducer from "../reducers";
import * as React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AnswerPage from './AnswerPage'
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

describe('AddQuestion',()=>{
    it('will match', ()=>{
        var view =render(
            <Provider store={store}>
                <Router>
                    <AnswerPage />
                </Router>
            </Provider>
        );
        expect(view).toMatchSnapshot();
    });
  
})
