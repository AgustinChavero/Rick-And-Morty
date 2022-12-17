import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import * as actions from "../../redux/actions";
import Card from "../Card/Card"

export default function Favorite () {
    const dispatch = useDispatch();
    const favorites = useSelector(
        (globalState) => globalState.favorites
    );
    const handleOrder = (e) => {
        dispatch(actions.orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        dispatch(actions.filterCards(e.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <Option hidden>Order</Option>
                <Option value="ascendent">Ascendent</Option>
                <Option value="descendent">Descendent</Option>
            </select>
            <select onChange={handleFilter}>
                <Option hidden>Filter</Option>
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Genderless">Genderless</Option>
                <Option value="unknown">Unknown</Option>
            </select>
            {favorites.map(
                (e) => 
                <Card
                    id={e.id}
                    key={e.id}
                    image={e.image}
                    name={e.name}
                    species={e.species}
                    gender={e.gender}
                    origin={e.origin}
                    location={e.location}
                    episode={e.episode}
                    status={e.status}

                    onClose={e.onClose}
                />
            )}
        </div>
    )
}

const Option = styled.option `
    color: white;
    text-decoration: none;
`