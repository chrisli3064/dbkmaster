import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

// Define the type for the route parameter
type StoryCardProp = {
  route: RouteProp<{ StoryCard: { content: string } }, 'StoryCard'>;
};

function StoryCard({ route} : StoryCardProp ) {
  const { content } = route.params;

  return (
    <View>
      <Text>{content}</Text>
    </View>
  );
}


export default StoryCard;
