import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native'; // Import RouteProp
import { WebView } from 'react-native-webview';

type NewsPageRouteProp = {
  content: string; // Define the type of the 'content' parameter
};

type Props = {
  route: RouteProp<Record<string, NewsPageRouteProp>, 'NewsPage'>; // Define the type for the 'route' prop
};

function NewsPage({ route }: Props) {
  const { content } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text>{content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16, // Add padding for spacing
  },
});

export default NewsPage;
