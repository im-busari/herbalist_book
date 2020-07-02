import React from 'react';
import { Jumbotron, Mission, ExploreProducts, Team } from './components';

const Home = () => {

  return (
    <div>

      <Jumbotron textTopWithBG="Let's" textTop="try it" 
      textBottomBefore="the" textBottomWithBG="Nature's" textBottomAfter="way" />

      <Mission title="Mission" />

      <ExploreProducts title="Products" 
        text="We offer a wide range of products and if you need a small inspiration on how to consume them - check out our Library section. 
        There you can find recipes and bunch of ideas how to combine the herbs. Already tried our services? We would love to hear back from you. 
        Filling out the form takes up to 5 min. Click here to start." />

      <Team title="team" />

    </div>
  );
}

export default Home;
