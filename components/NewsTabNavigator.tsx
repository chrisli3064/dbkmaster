import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsTab from './NewsTab';
import Sports from './Sports';
import Diversions from './Diversions';
import Opinion from './Opinion';

const Tab = createMaterialTopTabNavigator();

function NewsTabNavigator() {
    return ( // https://dbknews.com/category/news/feed/
      <Tab.Navigator>
        <Tab.Screen name="News" component={NewsTab} />
        <Tab.Screen name="Sports" component={Sports} />
        <Tab.Screen name="Diversions" component={Diversions} />
        <Tab.Screen name="Opinion" component={Opinion} />
        {/* Add more tab screens as needed */}
      </Tab.Navigator>
    );
  }

export default NewsTabNavigator