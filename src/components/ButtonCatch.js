import React, {Component} from 'react';
import '../style/button-catch.css'
import { Button, message  } from 'antd';
import ModalConfirm from './ModalConfirm';
import { connect } from 'react-redux';

class ButtonCatch extends Component {

  constructor(props){
    super(props);
    this.state = {
      caught: 0,
      visible: false,
      loading: false,
      nickName: '',
      myPokemon: [],
      pokemonObject: {
        id: '',
        name: '',
        image: '',
        nickName: ''
      },
    }
  }

  onClick = () => {
    var min = 0;
    var max = 1;
    var rand = Math.round(min + Math.random() *(max-min));
    if(rand === 1){
      this.setState({
        visible: true,
      });
    } else {
      message.warning('Pokemon failed to catch');
    }
  }

  onInputChanged = (changedText) => {
    this.setState({
      nickName : changedText.target.value,
    })
  }

  handleOk = () => {
    this.setState({ 
      loading: true 
    });

    setTimeout(() => {
      if(this.state.nickName !== ''){
        this.setState({ loading: false, visible: false });
        const catchedHistory = localStorage.getItem('myPokemon')
        if(catchedHistory){
          this.setState({
            myPokemon: JSON.parse(catchedHistory)
          });
          this.setState({ 
            pokemonObject: {
              id: this.props.pokemonDetail.pokemonDetail.id,
              name: this.props.pokemonDetail.pokemonDetail.name,
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.pokemonDetail.pokemonDetail.id+".png",
              nickName: this.state.nickName
            }
          })
          const foundData = this.state.myPokemon.some(el => el.id === this.state.pokemonObject.id);
          if(!foundData){
            this.state.myPokemon.push(this.state.pokemonObject);
            localStorage.setItem('myPokemon', JSON.stringify(this.state.myPokemon))
            message.success('pokemon have been saved');
          } else {
            message.warning('pokemon already have');
          }
          
        } else {
          this.setState({ 
            pokemonObject: {
              id: this.props.pokemonDetail.pokemonDetail.id,
              name: this.props.pokemonDetail.pokemonDetail.name,
              image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.pokemonDetail.pokemonDetail.id+".png",
              nickName: this.state.nickName
            }
          })
          this.state.myPokemon.push(this.state.pokemonObject);
          localStorage.setItem('myPokemon', JSON.stringify(this.state.myPokemon))
        }
        
      } else {
        this.setState({ loading: false});
        message.warning('Please give a nick name !!');
      }
      
    }, 1000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render(){
    const {visible, loading} = this.state;
    return (
      <div>
        <Button className="catch-button" onClick={this.onClick}>
          <p className="button-text">CATCH!</p>
        </Button>
        <ModalConfirm
          visible={visible}
          loading={loading}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          onInputChanged={this.onInputChanged}
        />  
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    pokemonDetail: state.pokemonDetailReducer,
  }
)

export default connect(mapStateToProps)(ButtonCatch);
