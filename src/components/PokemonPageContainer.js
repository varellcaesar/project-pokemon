import React from 'react';
import {Card, List, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import InfiniteScroll from 'react-infinite-scroll-component';

import '../style/pokemon-page.css'

const PokemonPageContainer = ({
    myPokemon,
    showConfirm,
}) => (
    <div className="my-pokemon-list">
        <div className="pokemon-info-count">
        <Card className="pokemon-total">
            <div>
                Pokemon Owned : {myPokemon.length} Pokemon
            </div>
        </Card>
        </div>

        <div className="my-pokemon-list-content">
        {
            <InfiniteScroll
              dataLength={myPokemon.length}
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
                  lg: 4,
                  xl: 4,
                  xxl: 5,
                }}
                dataSource={myPokemon}
                renderItem={item => (
                    
                  <List.Item className="my-pokemon-item">
                    <Card key={item.id} className="my-pokemon-card" bordered={false}>
                        <Button className="delete-button" onClick={() => showConfirm(item.id, item.name)}>
                            <DeleteOutlined type="delete" />
                        </Button>
                        <div className='image-content'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='title-content'>
                            {item.name}
                        </div>
                        <div className="title-content">
                            <span>Nick Name : </span>{item.nickName}
                        </div>
                    </Card>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
        }
        </div>
    </div>
    
)


export default connect()(PokemonPageContainer);