import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import db from '../config';

export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      present: [],
      absent: [],
    };
  }

  read = () => {
    const dataread = db.ref('class').val();

    const nd = new Date();
    const dd = nd.getDate().toString().padStart(2, '0');
    const mm = (nd.getMonth() + 1).toString().padStart(2, '0');
    const yy = nd.getFullYear();

    const today = `${dd}-${mm}-${yy}`;

    const present = [];
    const absent = [];

    for (const i in dataread) {
      if (dataread[i][today] === 'present') {
        present.push(dataread[i]);
      }
      if (dataread[i][today] === 'absent') {
        absent.push(dataread[i]);
      }
    }

    present.sort((a, b) => a.roll_no - b.roll_no);
    absent.sort((a, b) => a.roll_no - b.roll_no);

    this.setState({
      present,
      absent,
    });
  };

  componentDidMount() {
    this.read();
  }

  render() {
    return (
      <View>
        <Text style={st.headerpres}>Presente</Text>
        {this.state.present.map((xyz) => (
          <Text style={st.normal} key={xyz.roll_no}>
            {xyz.name}
          </Text>
        ))}

        <Text style={st.headerabs}>Ausente</Text>
        {this.state.absent.map((xyz) => (
          <Text style={st.normal} key={xyz.roll_no}>
            {xyz.name}
          </Text>
        ))}
      </View>
    );
  }
}

const st = StyleSheet.create({
  headerpres: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 30,
    backgroundColor: 'green',
  },

  headerabs: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: 'red',
  },

  normal: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
});
