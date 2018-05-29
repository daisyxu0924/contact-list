import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  View,
  ScrollView,
} from 'react-native';

import ListItem from '../ListItem/ListItem';
import styles from './ListStyle';

export default class ProductList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(sources.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)),
    };
  }

  renderRowData = (rowData, secitionId, index) => {
    return <ListItem data={{ ...rowData, index }} />
  }

  render() {
    return (
      <View style={styles.root}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRowData}
        />
      </View>
    );
  }
}

const sources = [
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "alexander",
      "last": "bell"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/60.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "wesley",
      "last": "fields"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/16.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "theo",
      "last": "pierce"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/20.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "lola",
      "last": "carpenter"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/72.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "phillip",
      "last": "wilson"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/57.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "rosie",
      "last": "jenkins"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/68.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "stephanie",
      "last": "hall"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/33.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "amanda",
      "last": "adams"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/20.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "jamie",
      "last": "james"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/97.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "eleanor",
      "last": "taylor"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/13.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "jeremiah",
      "last": "edwards"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/4.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/4.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/4.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "caitlin",
      "last": "shaw"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/70.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/70.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/70.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "tracey",
      "last": "harper"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/7.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "diane",
      "last": "thompson"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/38.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "angie",
      "last": "fernandez"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/25.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/25.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/25.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "rebecca",
      "last": "washington"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/15.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/15.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/15.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "alex",
      "last": "george"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/99.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "ms",
      "first": "grace",
      "last": "king"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/59.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "allen",
      "last": "berry"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/59.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "kaitlin",
      "last": "walker"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/52.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "andrew",
      "last": "holt"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/51.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "female",
    "name": {
      "title": "mrs",
      "first": "brooke",
      "last": "meyer"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/14.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "marc",
      "last": "bennett"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/51.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
    },
    "nat": "GB"
  },
  {
    "gender": "male",
    "name": {
      "title": "mr",
      "first": "jimmie",
      "last": "rodriguez"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/99.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
    },
    "nat": "GB"
  }
]
