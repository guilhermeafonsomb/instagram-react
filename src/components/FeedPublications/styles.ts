import styled from "styled-components";

export const ContainerPage = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  font-family: "Inter", sans-serif;

  width: 98vw;
  height: 98vh;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    margin: 0;
  }

  p {
    font-size: 0.75rem;
  }

  button {
    cursor: pointer;
  }
`;

export const PostCard = styled.section`
  width: 100%;
  max-width: 32.938rem;
  min-width: 0.6.25rem;
  height: 46rem;
  background: #fcfcfc;
  border: 0.063rem solid #dedede;
  box-shadow: -0.063rem 0.438rem 0.5rem -0.313rem rgba(0, 0, 0, 0.14);
  border-radius: 0.313rem;
`;

export const ContentTopCard = styled.article`
  display: flex;
  gap: 1.563rem;
  align-items: center;
  padding-left: 1.563rem;
  height: 4.688rem;

  .name-location {
    display: flex;
    flex-direction: column;
    gap: 0.563rem;
  }

  b {
    font-size: 0.875rem;
  }

  small {
    font-size: 0.625rem;
  }
`;

export const Swiper = styled.article`
  width: 32.875rem;
  height: 20.313rem;
  background-color: #ed4956;
`;

export const ContainerInteractionButtons = styled.article`
  display: flex;
  gap: 1rem;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.3);
    }
  }

  .favorite-icon {
    animation: pulse 0.2s;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    height: 1.5rem;
    width: 1.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const ContainerComments = styled.article`
  padding: 0.938rem 1.563rem 1.563rem 1.563rem;
  display: flex;
  flex-direction: column;
  gap: 1.563rem;

  p {
    width: 28rem;
  }

  .comment-description {
    height: 10.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 8.125rem;
    overflow: hidden;

    div {
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      ::-webkit-scrollbar {
        width: 0.438rem;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 0.5rem;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
`;

export const ContainerPostComment = styled.form`
  input {
    border: none;
    min-width: 3.125rem;
    width: 24rem;
    height: 3.438rem;
    background: #f1f1f1;
    border-radius: 0.313rem 0 0 0.313rem;
    outline: 0;
    padding: 0 1.25rem;
  }

  button {
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    width: 3.125rem;
    height: 3.438rem;
    border: none;
    background: #f1f1f1;
    color: #3d8aff;
    font-weight: 700;
    border-radius: 0 0.313rem 0.313rem 0;
    outline: 0;
  }
`;
