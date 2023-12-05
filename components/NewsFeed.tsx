import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native'; // Import necessary components
import axios from 'axios';
import * as RSSParser from 'react-native-rss-parser';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';

import {Card, Title, Paragraph, Button} from 'react-native-paper';

const Stack = createNativeStackNavigator();

// Define a prop type for the RSS URL



function NewsFeed({route}): JSX.Element {
  const [rssData, setRssData] = useState<any | null>(null);
  const navigation = useNavigation(); // Access the navigation object

  useEffect(() => {
    const fetchRssData = async () => {
      try {
        const {rssUrl} = route.params;
        const response = await fetch(rssUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch RSS feed');
        }

        const responseData = await response.text();
        const parsedData = await RSSParser.parse(responseData);

        // Iterate through the parsed items and add media content URLs
        const itemsWithMedia = parsedData.items.map((item, index) => {
          // Check if responseData is not null
          if (responseData) {
            // Access the corresponding <item> tag from the original XML data
            const itemFromXml = responseData.match(/<item>(.*?)<\/item>/gms);
            // Check if itemFromXml[ind ex] is not null
            if (itemFromXml && itemFromXml[index]) {
              const mediaUrlMatch = itemFromXml[index].match(
                /<media:content url="(.*?)"/,
              );
              // Extract the media URL if found
              const mediaUrl = mediaUrlMatch ? mediaUrlMatch[1] : null;
              // Add the extracted media URL to the item
              return {
                ...item,
                mediaUrl: mediaUrl,
              };
            }
          }

          // Handle the case where responseData is null or the item is not found
          return item;
        });

        // Replace the items in the parsed data with items containing media URLs
        parsedData.items = itemsWithMedia;

        setRssData(parsedData);
      } catch (error) {
        console.error('Error fetching or parsing RSS feed:', error);
      }
    };

    fetchRssData();
  }, []); // Add rssUrl as a dependency to re-fetch when it changes

  const handleItemPress = (link: string, content: string) => {
    // Use navigation to navigate to the NewsPage component
    navigation.navigate('NewsPage', {content});
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
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleItemPress(item.link, item.content)}>
                  <Card>
                    <Card.Content>
                      <Title>{item.title}</Title>
                      <View
                        style={{
                          flex: 1,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: item.mediaUrl}}
                          style={{width: 350, height: 200}}
                        />
                      </View>

                      <Paragraph>{item.description}</Paragraph>
                    </Card.Content>
                  </Card>
                </TouchableOpacity>
              );
            }}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default NewsFeed;
