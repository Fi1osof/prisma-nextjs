import styled from 'styled-components'

export const PokemonCardStyled = styled.div`
  /* .root { */
    width: 268px;
    height: 388px;
    margin: 16px;
    perspective: 1000px;
  /* } */

  .pokemonCard {
    --fire: #fddfdf;
    --grass: #defde0;
    --electric: #fcf7de;
    --water: #def3fd;
    --ground: #f4e7da;
    --rock: #d5d5d4;
    --fairy: #fceaff;
    --poison: #98d7a5;
    --bug: #f8d5a3;
    --dragon: #97b3e6;
    --psychic: #eaeda1;
    --flying: #f5f5f5;
    --fighting: #e6e0d4;
    --normal: #f5f5f5;

    width: inherit;
    height: inherit;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.6s 0.1s;
    transform: rotateY(180deg);
  }

  /* TODO: This place where we should change :hover on .active */
  .pokemonCard.active {
    transform: rotateY(0deg);
  }

  .cardFront,
  .cardBack {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: var(--normal);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardFront {
    transform: rotateY(0deg);
    z-index: 2;
  }

  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .wrap.front {
    z-index: 2;
    padding: 10px;
  }

  .wrap.front::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 12px solid #fce756;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 24px;
  }

  .wrap.back {
    z-index: -1;
  }

  .cardBack {
    transform: rotateY(180deg);
    z-index: 1;
  }

  .cardBack img {
    height: 100%;
    border-radius: 24px;
  }

  .pokemon {
    width: 100%;
    height: 100%;
    background-color: #eee;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .fire {
    background-color: var(--fire);
  }
  .grass {
    background-color: var(--grass);
  }
  .electric {
    background-color: var(--electric);
  }
  .water {
    background-color: var(--water);
  }
  .ground {
    background-color: var(--ground);
  }
  .rock {
    background-color: var(--rock);
  }
  .fairy {
    background-color: var(--fairy);
  }
  .poison {
    background-color: var(--poison);
  }
  .bug {
    background-color: var(--bug);
  }
  .dragon {
    background-color: var(--dragon);
  }
  .psychic {
    background-color: var(--psychic);
  }
  .flying {
    background-color: var(--flying);
  }
  .fighting {
    background-color: var(--fighting);
  }
  .normal {
    background-color: var(--normal);
  }

  .pokemon .imgContainer {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 140px;
    height: 140px;
    text-align: center;
    margin-bottom: 20px;
  }

  .pokemon .imgContainer img {
    margin-top: 20px;
    max-width: 90%;
  }

  .pokemon .info {
    margin-top: 20px;
  }

  .pokemon .number {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 0.8em;
    padding: 5px 10px;
  }

  .pokemon .name {
    margin: 15px 0 7px;
    letter-spacing: 1px;
  }

  .values {
    position: absolute;
    display: block;
    top: 20px;
    left: 20px;
    font-size: 26px;
    line-height: 26px;
    width: 78px;
    height: 78px;
  }

  .count {
    position: absolute;
    width: 30px;
    height: 26px;
    text-align: center;
  }

  .count.top {
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
  }

  .count.left {
    top: 26px;
    left: 0;
  }

  .count.right {
    top: 26px;
    right: 0;
  }

  .count.bottom {
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 0;
  }
`
