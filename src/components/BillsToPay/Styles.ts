import styled from 'styled-components'

export const Container = styled.div`

    .input-filter{
        width: 10rem;
        height: 3rem;
        margin: 0 0 10px 30px;        
        border-radius: 10px;
        color: var(--text-body);
        display: flex;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        border-color: #6194A0;
        border-bottom: 1px solid #6194A0;
        
        font-weight: 400;       
        text-align: left;
        line-height: 1.5rem;
    }

    margin-top: 4rem;
    table{
        width: 100%;
        border-spacing: 0 0.5rem;        
    }

    th{
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td{
        padding: 1rem 2rem;
        border: none;
        /* background: var(--shape); */
        font-weight: normal;
        color: var(--text-body);
        border-radius: 0.25rem;
    }

    tr{
        padding: 1rem 2rem;
        border: none;
        /* background: red; */
        font-weight: normal;
        color: var(--text-body);
        border-radius: 0.25rem;
    }

    .newtransiction{
        color: var(--text-body);
    }

    .deposit{
        color: var(--green);
    }

    .withdraw{
        color: var(--red);
    }

    /* linhas pares (even) */
    tbody tr:nth-child(even) {
        background-color: white;
    }
    /* linhas ímpares (odd) */
    tbody tr:nth-child(odd) {
        background-color: #F7FBFC;
    }

    table tbody tr:hover {
        background-color:  #6194A0;
        color: white;
    }
`;