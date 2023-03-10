import { Component } from "react";
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => (
        <div className="card-list" key="main-card-list">
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id} />;
            })}
        </div>
);

export default CardList;