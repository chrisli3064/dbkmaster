import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Linking } from 'react-native'; // Import necessary components
import axios from 'axios';
import * as RSSParser from 'react-native-rss-parser';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import {Card, Title, Paragraph, Button} from 'react-native-paper';


const Stack = createNativeStackNavigator();
function Sports(): JSX.Element {
  const [rssData, setRssData] = useState<any | null>(null);
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    const fetchRssData = async () => {
      try {
        const response = await fetch('https://dbknews.com/category/sports/feed/');
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }

        const responseData = await response.text();
        const parsedData = await RSSParser.parse(responseData);

        setRssData(parsedData);
      } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
      }
    };

    fetchRssData();
  }, []);

  const handleItemPress = (link: string, content: string) => {
    // Use navigation to navigate to the NewsPage component
    navigation.navigate('StoryCard', { content });
  };

  return (
    <View>
      {rssData ? (
        <>
          <Text>{rssData.title}</Text>
          <Text>Number of items: {rssData.items.length}</Text>
          <FlatList
            data={rssData.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleItemPress(item.link, item.content)}>
                <Card>
                  <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={() => handleItemPress(item.link, item.content)}>
                      Read More
                    </Button>
                  </Card.Actions>
                </Card>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default Sports;
