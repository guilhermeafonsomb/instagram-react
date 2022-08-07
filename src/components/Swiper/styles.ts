import styled from "styled-components";

export const SwiperContainer = styled.article`
  .my-swiper {
    :global(.swiper-pagination-bullet) {
      background: white;
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      opacity: 15%;
    }
  }

  .my-slide {
    display: flex;
    justify-content: center;

    img {
      height: 350px;
    }
  }
`;
