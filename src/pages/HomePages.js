import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../style/home-layout.css';
import icon from '../assets/Pokemon.png';
import ListPokemon from '../components/ListPokemon'
import NavButton from '../components/NavButton';
import {getPokemonList, loadMorePokemonList} from '../redux/action/ListPokemonAction';
import { connect } from 'react-redux';
import DetailPokemon from '../components/DetailPokemon'
import PokemonPage from './PokemonPage'


class HomePages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLimit: 20,
            currentOffset: 20,
        }
    }

    componentDidMount(){
        this.props.getPokemonList();
    }

    handleScroll = event => {
        const { currentLimit, currentOffset } = this.state;
        const { pokemonList, pokemonListResult } = this.props;
        const element = event.target;

        if(element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.setState({
                currentLimit: currentLimit + 20,
            });
            if(pokemonListResult.length <= pokemonList.count){
                this.props.loadMorePokemonList(currentLimit, currentOffset);
            }
        }
    }

    render(){
        return (
            <Router>
                <div className="HomePage">
                    <header className="PageHeader">
                        <div className="logo">
                            <img src={icon} alt='logo'/>
                        </div>
                    </header>
                    <NavButton/>

                    <Switch>
                        <Route exact path="/" render={() => (
                            <ListPokemon
                                handleScroll={this.handleScroll}
                            />
                        )}/>
                        <Route exact path="/my-pokemon" render={() => (
                            <PokemonPage/>
                        )}/>
                        <Route exact path="/pokemon-detail/:id" render={() => (
                            <DetailPokemon/>
                        )}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => (
    {
        pokemonList: state.pokemonListReducer.pokemonList,
        pokemonListResult: state.pokemonListReducer.pokemonListResult
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        getPokemonList(){
            dispatch(getPokemonList())
        },

        loadMorePokemonList(limit, offset){
            dispatch(loadMorePokemonList(
                limit, offset
            ))
        },
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(HomePages);