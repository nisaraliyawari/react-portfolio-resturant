import React from 'react';

import CardItem from '../common/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our Delicious Menu!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sea.jpg'
              text='Best ever Local & imported Sea Foods'
              label='Best Of Sea Food'
              path='/Gallery'
             
            />
            <CardItem
              src='images/ham.jpg'
              text='Mouth Watering Hamburgers'
              label='Home OF Fast Food'
              path='/Gallery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/piz.jpg'
              text='Taste of Paradise Pizzas'
              label='Yummmy'
              path='/Gallery'
            />
            <CardItem
              src='images/cof.jpg'
              text='concentrate with out Best Coffee'
              label='Explore'
              path='/Gallery'
            />
            <CardItem
              src='images/tea.jpg'
              text='Best ever traditional Tea'
              label='TeaHollic'
              path='/Gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
