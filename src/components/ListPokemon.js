import React from 'react';
import {Card, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import "antd/dist/antd.css";

import '../style/pokemon-list.css'
import ItemPokemon from './ItemPokemon';
import { getId } from '../helper/pokemonUtils';

const antIcon = <LoadingOutlined type="loading" style={{ fontSize: 50 }} spin />;
const ListPokemon = ({pokemonList, pokemonListResult, isLoading, ...props}) => (
    <div className="pokemon-list">
        <div className="pokemon-info-count">
            <Card bordered={false} className="pokemon-total">
                Total Pokemon : {pokemonList.count} Pokemon
            </Card>
        </div>
        <div className="pokemon-list-content" onScroll={pokemonListResult.length <= pokemonList.count ? props.handleScroll : null}>
            {
              pokemonListResult.map(pokemon => {
                const {name, url} = pokemon;
                const id = getId(url)
                return (
                  <div key={id} className="col-sm-3">
                    <ItemPokemon
                        name={name}
                        id={id}
                    />
                  </div>
                );
              })
            }
        </div>
        {
        isLoading && (
          <div className="text-center">
              <Spin indicator={antIcon}/>
          </div>
        )}
    </div>
    
    
)

const mapStateToProps = (state) => (
  {
      isLoading: state.pokemonListReducer.isLoading,
      pokemonListResult: state.pokemonListReducer.pokemonListResult,
      pokemonList: state.pokemonListReducer.pokemonList,
  }
)

export default connect(mapStateToProps)(ListPokemon);