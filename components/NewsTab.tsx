import { Text, View, FlatList, TouchableOpacity, Linking } from 'react-native'; // Import necessary components
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewsFeed from './NewsFeed';
import NewsPage from './NewsPage'
const Stack = createNativeStackNavigator();


function NewsTab({route}): JSX.Element {
  const rssUrl = 'https://dbknews.com/category/news/feed/';
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* Define your stack screens here */}
        <Stack.Screen name="NewsFeed" component={NewsFeed}  initialParams={{ rssUrl: rssUrl }} />
        <Stack.Screen name="NewsPage" component={NewsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NewsTab;
