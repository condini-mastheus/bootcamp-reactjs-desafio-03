import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 300px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ccc;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 10px;
  z-index: 0;
  border-radius: 10px;

  .empty-user {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    background: #f2f2f2;
    height: 100%;

    p {
      text-align: center;
      color: #888;
      font-size: 12px;
    }
  }

  .user-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 15px 0;
      margin: 0 8px;
      border-bottom: 1px solid #dedede;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;

        &.info {
          flex-direction: column;
          align-items: flex-start;
          flex: 0.8;
        }

        &.action {
          flex-direction: row;
          align-items: flex-end;
        }
      }

      strong {
        color: #333;
        font-size: 14px;
        line-height: 24px;
      }

      a {
        color: #826cc3;
        font-size: 12px;
        line-height: 12px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 25px;
        height: 25px;
        border: 1px solid #fd3333;
        background: #fd3333;
        border-radius: 100%;
        cursor: pointer;

        &:hover {
          border: 1px solid #fd1f1f;
          background: #fd1f1f;
        }

        i {
          color: #fff;
          font-size: 12px;
        }
      }

      img {
        width: 48px;
        height: 48px;
        border-radius: 100%;
      }
    }
  }
`;
