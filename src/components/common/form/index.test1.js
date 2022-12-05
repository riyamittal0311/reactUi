

import { Provider } from 'react-redux'
import React from 'react';

import { screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  userEvent from '@testing-library/user-event'

import Form from './index'





const middleware = [thunk];
const mockStore = configureMockStore(middleware);


//const user = userEvent.setup()
const App = ({ store, children }) => <Provider store={store}>{children}</Provider>;



describe('Form Component',()=>{
 const props={   buttonName:'test',
    pageName:'testPage',
    onClickButton: jest.fn(),
    fields:[{
        type:'text',
        placeholder:'place',
        onChange:jest.fn()
   
    } ]
}
     const formRender=  (<App store={mockStore({article:[]})} >
        <Form  {...props}   />
        </App>
    )
    it('form button name test',()=>{
        
    render(formRender);
       expect(screen.getByTestId('button')).toHaveTextContent(props.buttonName)
       expect(screen.getByTestId('page-title')).toHaveTextContent(props.pageName)
    })

    it('When user click on the button',()=>{
          
        render(formRender);
          userEvent.click(screen.getByTestId('button'))
        expect(props.onClickButton).toBeCalled()
    })

    it('when user type in the input field',()=>{
        
             render(formRender);
           userEvent.type(screen.getByPlaceholderText('place'),'sample  test case')
           expect(props.fields[0].onChange).toBeCalledWith('sample  test case')
    })

    it('check logout button not be shown when not pass in props',()=>{
        props.isLogout = true
        const formRender=  (<App store={mockStore({article:[]})} >
        <Form  {...props}   />
        </App>
    )
        render(formRender)
        expect(screen.getByText('LogOut')).toBeVisible()
    })
})