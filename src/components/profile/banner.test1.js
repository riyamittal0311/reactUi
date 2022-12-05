
import React from "react";

import createMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


import Banner from "./banner";
import {shallow, mount} from 'enzyme'
import '@testing-library/jest-dom/extend-expect';

const mockStore = createMockStore([thunk])

jest.mock('axios', () => {
    const mockPayload = { data:{ article:[] } ,status:200};
    return {
      post: (r = '/resolve') =>
        new Promise((resolve, reject) =>
          r === '/resolve' ? resolve(mockPayload) : reject(mockPayload),),
      create: jest.fn(function() {
        return this;
      }),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() }
      },
    };
  });

describe('banner component',()=>{

    const App = ({store , children})=>(
      
           <Provider store={store}>{children}</Provider>
           )
    it('onClickFollow function',()=>{
        const bannerProps ={
            user:[] ,
            isSameUser:false,
            viewUserId:1,
            viewUser:[]
        }
    //     const mockFunc = jest.spyOn(Banner,'onClickFollow')
    // const bannerComp = (<App store={mockStore()}>
    //     <Banner/>
    // </App>)
    //            render(bannerComp)
    //            userEvent.click(screen.getByTestId('like'))
    //            console.log(mockFunc)
    //            expect(mockFunc).toBeCalled()

// const bannerComp = mount(<App store={mockStore()}><Banner {...bannerProps}/></App>)
//  console.log(bannerComp.instance())

    })
})