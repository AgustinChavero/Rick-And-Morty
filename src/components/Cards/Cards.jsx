import styled from 'styled-components';
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return <DivContenedor>
      {characters.map(e => <Card 
                              onClose={props.onClose}
                              image={e.image}
                              id={e.id}
                              key={e.id}
                              name={e.name} 
                              species={e.species} 
                              gender={e.gender}
                              origin={e.origin?.name}
                              location={e.location?.name}
                              episode={e.episode?.length}
                              status={e.status}
                           />
                     )
      }
   </DivContenedor>;
}

const DivContenedor = styled.div `
   display: flex;
   flex-wrap: wrap;
`