import {render} from '@testing-library/react'
import reducer from "../reducers";
import * as React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AddQuestion from './AddQuestion'
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

describe('AddQuestion',()=>{
    it('will match', ()=>{
        var view =render(
            <Provider store={store}>
                <Router>
                    <AddQuestion />
                </Router>
            </Provider>
        );
        expect(view).toMatchSnapshot();
    });
  
})
