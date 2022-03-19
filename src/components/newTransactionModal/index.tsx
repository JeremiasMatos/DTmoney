import { FormEvent, useState,useContext} from 'react'
import Modal from 'react-modal'
import {Container,TransactionTypeContainer,RadioBox} from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { TransactionsContext } from '../../TransactionContext'

interface newTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=> void;
}
       


export function NewTransactionModal({isOpen,onRequestClose}:newTransactionModalProps){
        const {createTransaction}= useContext(TransactionsContext);
              
         
      const [title, setTitle] = useState('')
      const [category, setCategory] = useState('')
      const [amount,setAmount] = useState(0)
      const [type,setType] = useState('deposit');

     
   
     
   async function handleCreateNewTransaction(event:FormEvent){
          event.preventDefault();

     await  createTransaction({
          title,
          amount,
          category,
          type,
         
      })
            setTitle('');
             setCategory('');
             setAmount(0);
             setType('deposit');
            
        onRequestClose()  
     }
    return(
        <Modal 
        isOpen = {isOpen} 
         onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content" 
    >

<button onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="close modal"/>
 </button>

        <Container onSubmit={handleCreateNewTransaction}>
        <h1>Cadastrar Transacao</h1>
            < input
            placeholder="title"

            value={title}
            onChange ={event=>setTitle(event.target.value)}
            />

            <input
            type="number"
            placeholder="valor"

            value={amount}
            onChange ={event=>setAmount(Number(event.target.value))}
            />
     
     <TransactionTypeContainer>
         <RadioBox type="button" 
         onClick={()=>{setType('deposit');}}
            isActive={type=='deposit'}
            activeColor="green"
       >
             
             <img src={incomeImg} alt="Entrada" />
             <span>Entarda</span>
         </RadioBox>

         <RadioBox type="button" 
           onClick={()=>{setType('withdraw');}}
           isActive={ type=='withdraw'}
           activeColor="red"
         >

             <img src={outcomeImg} alt="Saida" />
             <span>Saida</span>
         </RadioBox>
     </TransactionTypeContainer>

            <input
            placeholder="Categoria"


            value={category}
            onChange ={event=>setCategory(event.target.value)}
            />
            <button type="submit">Cadastrar</button>
       
         </Container>
         
        </Modal>
    ) 
}

         
