import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from './Services/api';


interface TransactionsProps{
    id:number,
    title:string,
    amount:number,
    category:string,
   createdAt:string,
    type:string
  }
interface TransactionContextData{
    transactions:TransactionsProps[];
    createTransaction: (transaction:TransactionIput) => Promise<void>;
}

interface TransactionsProviderProps{
    children:ReactNode
} 

type TransactionIput = Omit< TransactionsProps, 'id'|'createdAt' >;

export const TransactionsContext=createContext<TransactionContextData>(
    
    {} as TransactionContextData );

 export function  TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions,setTransactions] = useState <TransactionsProps[]>([]);  
          
 
   useEffect(()=>{
       api.get('/transactions')
            .then(response=>setTransactions(response.data.transactions))
   },[]);

   async function createTransaction(transactionInput:TransactionIput){
        
     const response =  await api.post('/transaction',{
         ...transactionInput,
         createdAt:new Date(),
     })
     const {transaction} = response.data;
      
     setTransactions([
         ...transactions,
          transaction,
        ]);
   }
   return(
       <TransactionsContext.Provider value={{transactions,createTransaction}}>
           {children}
       </ TransactionsContext.Provider>
   );
}