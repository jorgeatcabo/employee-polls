import {render, fireEvent, screen} from '@testing-library/react'
import reducer from "./reducers";
import * as React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import AddQuestion from './components/AddQuestion'
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

describe('AddQuestion',()=>{
    it('will display an error if first option is not provided', ()=>{
        var view =render(
            <Provider store={store}>
                <Router>
                    <AddQuestion />
                </Router>
            </Provider>
        );

        var submitButton=screen.getByTestId('submit-button');
        fireEvent.click(submitButton)
        expect(screen.getByTestId('first-option-error-header')).toBeInTheDocument();
    });

    it('will display an error if second option is not provided', ()=>{
        var view =render(
            <Provider store={store}>
                <Router>
                    <AddQuestion />
                </Router>
            </Provider>
        );

        var submitButton=screen.getByTestId('submit-button');
        fireEvent.click(submitButton)
        expect(screen.getByTestId('first-option-error-header')).toBeInTheDocument();
    });
  
})
