import styled from 'styled-components'

export const LayoutStyled = styled.section`
  font-size: 1.4rem;
  position: relative;
  background: #fafafa;
  clip-path: polygon(0 0, 20% 5%, 100% 0, 100% 100%, 80% 95%, 0 100%);
  z-index: 5;
  background-attachment: fixed;

  .wrapper {
    padding: 5rem 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  article {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 3rem 0;
  }

  .title {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title h3 {
    font-size: 2.4rem;
  }

  .separator {
    background: #f300b4;
    width: 150px;
    height: 2px;
    margin: 1rem 0;
    padding: 0;
  }

  .subtitle {
    font-size: 1.6rem;
    text-align: center;
    color: inherit;
    padding-bottom: 1.5rem;
  }

  p {
    padding-bottom: 1.5rem;
    color: rgb(74, 92, 68);
    line-height: 1.9rem;
  }

  .desc.full {
    grid-column-end: span 4;
    margin-bottom: 2rem;
  }

  .desc {
    grid-column-end: span 2;
    background: #ffffffaa;
    padding: 2rem;
    text-align: justify;
  }

  @media only screen and (max-width: 1149px) {
    article {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
    .desc.full {
      grid-column-end: -1;
    }

    .desc {
      grid-column-end: -1;
    }
  }
  @media only screen and (max-width: 949px) {
    clip-path: polygon(0 0, 20% 2%, 100% 0, 100% 100%, 80% 98%, 0 100%);
    background-position: top left;
    background-size: cover;
  }
  @media only screen and (max-width: 649px) {
    .wrapper {
      padding: 10rem 2rem 8rem;
    }
  }
`
