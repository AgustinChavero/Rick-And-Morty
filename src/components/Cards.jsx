import styled from 'styled-components';
import Card from './Card';

// const variable = () => window.alert('Emulamos que se cierra la card')
// onClose = {variable}
const DivContenedor = styled.div `
   display: flex;
   flex-wrap: wrap;
`

export default function Cards(props) {
   const { characters } = props;
   return <DivContenedor>
      {characters.map(e => <Card 
                              onClose={props.onClose}
                              id={e.id}
                              name={e.name} 
                              species={e.species} 
                              gender={e.gender} 
                              image={e.image}
                           />
                     )
      }
   </DivContenedor>;
}
