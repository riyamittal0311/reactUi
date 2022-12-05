/**
 * @jest-environment jsdom
*/
import React from "react";

import { shallow ,mount} from "enzyme";


import {render,screen}  from '@testing-library/react'
import  userEvent from '@testing-library/user-event'
import TestCase from ".";
import  '@testing-library/jest-dom';


describe('testing',()=>{

    it('test case file',async()=>{
   
        const setState = jest.fn()
        const sp=     jest.spyOn(React,'useState').mockImplementation((useState)=>[useState,setState])
       // const wrapper  = mount(<TestCase/>) 
              render(<TestCase/>)
        const inp = screen.getByTestId('inputId')
          userEvent.type(inp ,'check value')
        //   const div =screen.getByTestId('divId')
        //   expect(div).toHaveTextContent('check value')
        console.log('spy',sp.useState)
//expect(setState).toHaveBeenCalledWith('check value')
      
   



    })
})