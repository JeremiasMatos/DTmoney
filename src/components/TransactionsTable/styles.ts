import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -4rem;
  display:flex;
  align-items:center;
  justify-content:center;
  /* background:blue; */
  
   table{
    
    width:100%; 
    max-width:1100px;
    border-spacing:0 0.5rem;// SPACING BETWEEN TABLE ITEMS;
     th{
         color: var(--text-body);
         padding:1rem 2rem;
         text-align:left;
         font-weight:400;
         line-height:1.5rem;
     }
    td{
         padding:1rem 2rem;
        background:var(--shape);
        color:var(--text-body);
        border:0;
        border-radius:0.25rem;
        &:first-child{
        color:var(--text-title);
         }
         &.deposito{
            color:var(--green);
        }
        &.withdraw{
            color:var(--red);
        } 
     }       
   }
`;