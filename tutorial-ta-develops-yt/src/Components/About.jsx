import React from 'react';

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum, cum velit a vel deserunt similique! Voluptas natus quaerat exercitationem aliquam ipsum adipisci. At quibusdam, mollitia voluptates iste hic est suscipit porro nostrum! Facilis, repellat.</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About;
