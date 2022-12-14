import React from "react";
import Accordion from './components/Accordion'


const items = [
  {
      title: 'What is React?',
      content: 'React is a frontent javascript framework'
  },
  {
      title: 'Why use React',
      content: 'React is a favorite library among engineers'
  },
  {
      title: 'How do you use React',
      content: 'You use React by creating components'
  }
];

function App() {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
