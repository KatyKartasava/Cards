import React from 'react';
import './App.css';
import { Card } from './assets/components/card/Card';
import image from './assets/images/desert.svg';


const cardsData = [
  {
    id: 1,
    imgSrc: image,
    title: "Headline",
    description: "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.",
    withLabel: "Sale",
  },
]

function App() {
  return (
    <div className="App">
      <div className="gridWrapper">
        {
          cardsData.map((c, i) => {
            return (
                <Card key={i} id={c.id} title={c.title} description={c.description} imgSrc={c.imgSrc} widthLabel={c.withLabel}></Card>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;


