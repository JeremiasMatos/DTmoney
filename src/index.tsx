        import React from 'react';
        import ReactDOM from 'react-dom';
        import {createServer,Model} from 'miragejs';
         //import { createServer } from 'miragejs/server';

        import{ App }from './App';

createServer({
   models:{
      transaction:Model,
   },
  seeds(server){
     server.db.loadData({
       transactions:[
          {
            id:1,
            title:'website freelance',
            type:'deposit',
            amount: 8000,
            category:'Dev',
            createdAt: new Date('2021-12-28 12:30:04')
          } ,

          {
          id:2,
          title:'Dev mobile',
          type:'withdraw',
          amount: 6000,
          category:'soft ENG',
          createdAt: new Date('2021-08-30 12:45:04')
         } 
       ] ,
     })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })
    this.post('/transaction', (schema,request)=>{
       const data = JSON.parse(request.requestBody);
       return schema.create('transaction', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
