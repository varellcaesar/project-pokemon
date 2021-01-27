import React from 'react';
import {Card} from 'antd';

import '../style/pokemon-item.css'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

var imageUrl = '';

const ItemPokemon = ({id, name}) => (
    imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(id) +".png",

    <div className="">
        <Card className="layout-card-item" hoverable bordered={false}>
            <Link to={'/pokemon-detail/'+id}>
                <div className='image-content'>
                    <img src={imageUrl} alt={name} />
                </div>
                <div className='title-content'>
                    {name}
                </div>
            </Link>
        </Card>
    </div>
)
  
// export default connect()(PokemonItem);
export default ItemPokemon;