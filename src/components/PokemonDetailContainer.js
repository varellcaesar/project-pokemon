import React from 'react';
import {Card, Row, Tag, List} from 'antd';
import { connect } from 'react-redux';
import "antd/dist/antd.css";

import '../style/pokemon-detail.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getId } from '../helper/pokemonUtils';
import ButtonCatch from '../components/ButtonCatch';

const PokemonDetailContainer = ({pokemonDetail, pokemonTypes, pokemonMoves, ...props}) => (
    <div className="pokemon-detail-container">
      <div className="pokemon-detail-frame">
        <div className="pokemon-detail-image">
          <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemonDetail.pokemonDetail.id+".png"} alt="pokemon"/>
        </div>
        <div className="pokemon-detail-name">
          {pokemonDetail.pokemonDetail.name}
        </div>

        <div className="pokemon-detail-type">
          <div className="title-desc">Type</div>
          <div className="pokemon-type-layout">
            <Row gutter={[16, 16]} justify='center'>
            {
              pokemonTypes.map(type => {
                const id = getId(type.type.url);
                return(
                    <Tag key={id} color="#f50">{type.type.name}</Tag>
                )
              })
            }
            </Row>
            
          </div>
        </div>
        <div className="pokemon-detail-moves">
          <div className="title-desc">Moves</div>
          <div className="pokemon-detail-moves-list">
            <InfiniteScroll
              dataLength={pokemonMoves.length}
              initialLoad={false}
              pageStart={0}
              hasMore={false}
              useWindow={false}
            >
              <List
                grid={{
                  gutter: 16,
                  xs: 2,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 3,
                  xxl: 4,
                }}
                dataSource={pokemonMoves}
                renderItem={item => (
                  <List.Item>
                    <Card className="pokemon-type-card">{item.move.name}</Card>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </div>
        <div className="pokemon-catch-button">
            <ButtonCatch/>
        </div>

      </div>
        
    </div>
    
    
)

const mapStateToProps = (state) => (
  {
    pokemonDetail: state.pokemonDetailReducer,
    pokemonTypes: state.pokemonDetailReducer.pokemonTypes,
    pokemonMoves: state.pokemonDetailReducer.pokemonMoves,
  }
)

export default connect(mapStateToProps)(PokemonDetailContainer);