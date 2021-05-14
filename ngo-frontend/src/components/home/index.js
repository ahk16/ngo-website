import React from 'react';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
//   } from 'reactstrap';
import {UncontrolledCarousel} from 'reactstrap';
import { Card } from 'reactstrap';

  const items = [
    {
      src: '/images/blood.jpg',
      altText: '',
      caption: ''
    },
    {
      src: '/images/money.jpg',
      altText: '',
      caption: ''
    },
    {
      src: '/images/food.jpg',
      altText: '',
      caption: ''
    }
  ];

class HomePage extends React.Component {
    render() {
        return (
            <div style={{margin:100}}>
                <Card style={{margin:"auto"}}>
                <UncontrolledCarousel items={items} />
                </Card>
            </div>
            
        )
    }
}


export default HomePage;