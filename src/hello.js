import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
        <header>
            <img src="http://img.actualidadiphone.com/wp-content/uploads/2016/07/pokemon-pikachu-go.jpg"/>
        </header>
)

const NewSearch = () => {
    return (
        <form>
            <input id="new" placeholder="New Item" type="text"/>
            <button>+</button>
        </form>
    )
}

const Items = (props) => {
    console.log(props.items)
    return (
     <ul>
   <h2> . </h2>
        <li>Bulbasaur</li>
        	<ol>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</ol>
           
        <li>Charmander</li>
       		<ol> The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.</ol>
        
   		<li>Charizard</li>
   			<ol>Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.</ol>
     
   		<li>Caterpie</li>
   			<ol>Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.</ol>
      
   		<li>Pikachu</li>
  			<ol>Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.</ol>
 
        </ul>
    )
}

const Content = (props) => (
    <section>
        <Items items={props.items}/>
    </section>
)

const Hello = () => {
    
    return (
        <section>
            <Header />
            <NewSearch />
            <Content />
        </section>
        
    )
}

const element = document.getElementById('hello')
ReactDOM.render(<Hello />,element)
