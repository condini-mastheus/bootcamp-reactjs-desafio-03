import styled from 'styled-components';

export const Container = styled.div`
  background: '#ccc';
  box-sizing: border-box;
  display: block;
  overflow: hidden;

  .modal-header {
    background: #7159c1;
    padding: 20px 10px;
    font-size: 12px;
    color: #fff;
    font-weight: bold;
  }

  .modal-content {
    text-align: center;
  }

  input {
    box-sizing: border-box;
    margin: 20px auto;
    padding: 10px;
    color: #888;
    border: 1px solid #ccc;
    width: 90%;
    border-radius: 10px;
  }

  .modal-footer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    margin: 0 0 10px 0;
    padding: 0 20px;

    button {
      width: 100%;
      padding: 5px;
      margin: 0 5px;
    }
  }
`;
