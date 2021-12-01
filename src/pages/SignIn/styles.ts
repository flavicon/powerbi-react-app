import styled from "styled-components";
import { darken } from 'polished';

export const SignInContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  background: var(--bg-gradient-blue-300);

`

export const SignInArt = styled.section`
  padding: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-size: 1rem;
  color: var(--white);

  img {
    margin-top: 3rem;
  }

  p {
    font-size: 3rem;
    font-weight: 600;

    span {
      font-weight: 700;
    }
  }
`

export const SignInBox = styled.section`
  background: var(--white);
  
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-radius: 50px 0 0 50px;
  
  form {
    padding: 16px;
    
    min-width: 400px;
    min-height: 420px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    border-radius: 8px;

    box-shadow: 0 4px 16px -1px var(--gray-100);
    
    color: var(--blue-600);

    .contentForm {

      display: flex;
      flex-direction: column;
      align-items: center;

      .formInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      img {
        width: 100px;
      }

      label {
        margin-top: 8px;
        margin-bottom: 4px;

        font-size: 14px;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
      }

      input {
        padding: 0 4px;
        width: 300px;
        height: 40px;
        
        border: 1px solid var(--blue-600);
        border-radius: 4px;

        font-size: 1rem;

        &:focus {
          border: 2px solid var(--blue-500);
        }
      }

      button {
        margin-top: 24px;
        width: 250px;
        height: 50px;

        border: none;
        border-radius: 8px;

        font-size: 1rem;
        font-weight: 600;

        background: var(--blue-500);
        color: var(--white);

        transition: 0.5s;

        &:hover {
          cursor: pointer;
          background: ${darken(0.15, "#1C1CA6")};

          box-shadow: 0 4px 16px -2px var(--gray-100);
          transition: 0.3s;
        }
      }

      a {
        margin-top: 4px;
        text-decoration: none;
        color: var(--blue-500);
      }
    }
  }
`