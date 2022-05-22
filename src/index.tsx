import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: "Freelancer de Website",
        type: "deposit",
        category: "Developer",
        amount: 6000,
        createdAt: new Date("2022-03-02 15:35:31")
      },
      {
        id: 2,
        title: "Despesas da casa",
        type: "withdraw",
        category: "Casa",
        amount: 1000,
        createdAt: new Date("2022-05-04 15:35:31")
      }
    ]
  })
},

  routes() {

    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

