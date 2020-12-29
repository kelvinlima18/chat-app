import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  width: 400px;
  display: flex;
  align-items: stretch;
  background: #fff;
  border-radius: 15px;

  margin: 5% 0 0 10%;
`;

export const Content = styled.div`
  padding: 32px;
  margin: 30px 0;

  form {
    margin-top: 20px;

    span {
      font-size: 12px;
      color: #666;
    }

    input {
      width: 300px;
      height: 35px;
      border-radius: 6px;
      border: 1px solid #999;
      padding: 10px;
    }

    a {
      color: #333;
      font-size: 12px;
      margin-top: 20px;
      display: flex;
      text-decoration: none;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      margin-top: 10px;

      button {
        width: 140px;
        height: 35px;
        border: 0;
        border-radius: 6px;
        background: #4484ce;
        color: #fff;
        font-size: 12px;

        &:hover {
        }
      }

      .signup {
        background: #fff;
        border: 1px solid #4484ce;
        color: #4484ce;
      }
    }
  }
`;
