import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, ScrollView, } from 'react-native';

export default class FightersList extends PureComponent {

  _renderFighters = (allFighters, gender) => {
    var fighters = new Array();
    allFighters.map(fighter => {
      if(fighter.weightClass && fighter.beltThumbnail !== null) {
        if(!fighter.weightClass.includes('Women') && gender === 'male') {
          fighters.push(fighter);
        } else if(fighter.weightClass.includes('Women') && gender === 'female') {
          fighters.push(fighter);
        }
      }
    });

    fighters = fighters.sort((A, B) => {
      return (B.wins - A.wins)
    });

    var fightersList = fighters.map(fighter => {
      return (<Text key={fighter._id}>{fighter.firstName + ' ' + fighter.lastName}</Text>);
    });

    return fightersList;
  }

  render() {
    const { allFighters, gender } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView>
          {this._renderFighters(allFighters, gender)}
        </ScrollView>
      </View>
    );
  }
}
