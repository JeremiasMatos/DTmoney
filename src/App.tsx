        import styled, { createGlobalStyle } from 'styled-components'
        import Modal from 'react-modal'
        import {useState} from 'react'


        import { GlobalStyle } from './styles/global'
        import { Header } from './components/Header'
        import { Dashboard } from './components/Dashboard';
        import { TransactionsTable }  from './components/TransactionsTable'
        import { NewTransactionModal } from './components/newTransactionModal'
        import { TransactionsProvider } from './TransactionContext'

Modal.setAppElement('#root')

export function App(){

    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal(){
         setIsNewTransactionModalOpen(false);
    }



  return (
    < TransactionsProvider >
         <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

         <Dashboard />

         <TransactionsTable/>
        
         <NewTransactionModal
         isOpen={isNewTransactionModalOpen}
         onRequestClose={handleCloseNewTransactionModal}
         />

        <GlobalStyle/>
    </ TransactionsProvider>
  );
}

