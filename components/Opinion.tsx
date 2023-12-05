import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Linking } from 'react-native'; // Import necessary components
import axios from 'axios';
import * as RSSParser from 'react-native-rss-parser';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Opinion(): JSX.Element {
  const [rssData, setRssData] = useState<any | null>(null); // Use a more specific type if possible

  useEffect(() => {
    const fetchRssData = async () => {
      try {
        const response = await fetch('https://dbknews.com/category/opinion/feed/');
        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }

        const responseData = await response.text();
        const parsedData = await RSSParser.parse(responseData);

        // Update the state with the parsed data
        setRssData(parsedData);
      } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
      }
    };

    fetchRssData();
  }, []);

  const handleItemPress = (link: string) => {
    // Open the item's link in the default browser
    Linking.openURL(link);
  };

  return (
    <View>
      {rssData ? (
        <>
          <Text>{rssData.title}</Text>
          <Text>Number of items: {rssData.items.length}</Text>
          {/* Render each feed item as a card */}
          <FlatList
            data={rssData.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleItemPress(item.link)}>
                <Card>
                  <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card.Content>
                  <Card.Actions>
                    <Button onPress={() => handleItemPress(item.link)}>
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

export default Opinion;
