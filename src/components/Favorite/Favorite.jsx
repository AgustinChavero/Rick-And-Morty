import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import style from "./style.module.css";
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
        <div className={style.boxOfSelect}>
            <div>
                <select onChange={handleOrder} className={style.select}>
                    <Option hidden>Order</Option>
                    <Option value="ascendent" className={style.options}>Ascendent</Option>
                    <Option value="descendent" className={style.options}>Descendent</Option>
                </select>
                <select onChange={handleFilter} className={style.select}>
                    <Option hidden>Filter</Option>
                    <Option value="Male" className={style.options}>Male</Option>
                    <Option value="Female" className={style.options}>Female</Option>
                    <Option value="Genderless" className={style.options}>Genderless</Option>
                    <Option value="unknown" className={style.options}>Unknown</Option>
                </select>
            </div>
            <div className={style.box}>
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
        </div>
    )
}

const Option = styled.option `
    color: white;
    text-decoration: none;
`