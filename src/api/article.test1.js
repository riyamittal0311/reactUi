import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {articleThunk} from './article'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


  jest.mock('axios', () => {
    const mockPayload = { data:{ article:[] } ,status:200};
    return {
      get: (r = '/resolve') =>
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

describe('Authenticate Action',()=>{
    let store
  
    beforeEach(() => {
      
      store = mockStore({data :{article:[],    feed:[]}});
    });

    describe('when no user is login',()=>{
        it('fetch all articles for no user',async()=>{
        
            return store.dispatch(articleThunk.fetchAllArticle())
            .then(()=>{
               const actions = store.getActions()
               console.log(actions)
             })
           
        })
    })
})
