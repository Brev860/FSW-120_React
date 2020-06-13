import React from 'react';
import ListItem from  './todo';


function App() {
  return (
    <div className="wrapper">
      <ListItem 
          title = 'C.R.E.A.M.'
          subtitle ='Hip Hop'
          information='Cash, Rules, Everything, Around, Me
          C.R.E.A.M.
          Get the money
          Dollar, dollar bill yall'
          artist = 'Wu Tang Clan'
          backgroundColor = 'red'
          fontTitle="35px"
          fontSubtitle='25px'
          fontPara="16px"
          fontStyle1="italic"
          fontStyle2='bold'
          backgroundColor2='white'
          />
      <ListItem
          title = 'Remeption Song'
          subtitle ='Reagge/Folk'
          information="Old pirates, yes, they rob I
          Sold I to the merchant ships
          Minutes after they took I
          From the bottomless pit
          But my hand was made strong
          By the and of the almighty
          We forward in this generation
          Triumphantly
          Won't you help to sing
          These songs of freedom?
          'Cause all I ever have
          Redemption songs
          Redemption songs" 
          artist = 'Bob Marley'
          backgroundColor = 'blue'
          fontTitle="35px"
          fontSubtitle='25px'
          fontPara="16px"
          fontStyle1="italic"
          fontStyle2='bold'
          backgroundColor2='white'
      />
      <ListItem 
          title = 'Strange Fruit'
          subtitle ='Jazz/Folk'
          information ="Southern trees bear a strange fruit
          Blood on the leaves and blood at the root
          Black bodies swinging in the southern breeze
          Strange fruit hanging from the poplar trees
          Pastoral scene of the gallant South
          The bulging eyes and the twisted mouth
          Scent of magnolia, sweet and fresh
          Then the sudden smell of burning flesh
          Here is a fruit for the crows to pluck
          For the rain to gather, for the wind to suck
          For the sun to rot, for the tree to drop
          Here is a strange and bitter crop" 
          artist = 'Billie Holiday'
          backgroundColor = 'red'
          fontTitle="40px"
          fontSubtitle='25px'
          fontPara="16px"
          fontStyle1="italic"
          fontStyle2='bold'
          backgroundColor2='white'
      />
      
   
      
    </div>
  )
}

export default App;
