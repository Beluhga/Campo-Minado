import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Params from './Components/Parame';
import MineField from './Components/MineField';
import {flagsUsed, invertFlag, createMinedBoard, cloneBoard, openField, hadExplosion, wonGame,showMines} from './Components/Funcoes';
import Header from './Components/Header';
import Level from './Screens/Level';

export default class App extends Component {

  constructor(props) {
    super(props) 
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = Params.getColumnsAmount();
    const rows = Params.getRowsAmount();
    return Math.ceil(cols * rows * Params.difficultLevel)
  }

  createState =() => {
    const cols = Params.getColumnsAmount()
    const rows = Params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevel: false, 
    }
  }

  onOpenField = (row, column) => {
      const board = cloneBoard(this.state.board)
      openField(board, row, column)
      const lost = hadExplosion(board)
      const won = wonGame(board)

      if (lost) {
        showMines(board)
        Alert.alert('Perdeeeuuuuu!');
      }

      if (won) {
        Alert.alert ('Parabéns', 'Você venceu :-]')

      }

      this.setState({ board, lost, won})
    
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if(won) {
      Alert.alert('Ganhou Parabéns')
    }

    this.setState({board, won })

  }

  onLevel = level => {
    Params.difficultLevel = level
    this.setState(this.createState())
  }

  
  render(){
  return (
    <View style={Estilo.container}>
      <Level isVisible={this.state.showLevel}
      onLevel={this.onLevel} 
      onCancel={() => this.setState({ showLevel: false})} />
     <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
     onNewGame={() => this.setState(this.createState())} 
     onFlagPress={() => this.setState({ showLevel: true})} />
      <View style={Estilo.board}>
        <MineField board={this.state.board} 
        onOpenField= {this.onOpenField}
        onSelectField={this.onSelectField} />
      </View>
     
      </View>
      )
}
}

const Estilo = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'flex-end',

  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa',
  }
 
});
