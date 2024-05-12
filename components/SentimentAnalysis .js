import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SentimentAnalysis = () => {
  const [diaryContent, setDiaryContent] = useState('');
  const [sentiment, setSentiment] = useState(null);
  const client_id = "aa"; //z5hgn2e6c1
  const client_secret = "pIyDljkjtq5frD4oL62Y550OtegQ5G58nkj65fId";
  const url = "https://naveropenapi.apigw.ntruss.com/sentiment-analysis/v1/analyze";

  const handleAnalyzeSentiment = async () => {
    const headers = {
      "X-NCP-APIGW-API-KEY-ID": client_id,
      "X-NCP-APIGW-API-KEY": client_secret,
      "Content-Type": "application/json"
    };
    const data = {
      content: diaryContent
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSentiment(result.document.sentiment);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your diary here..."
        value={diaryContent}
        onChangeText={text => setDiaryContent(text)}
      />
      <Button title="Analyze Sentiment" onPress={handleAnalyzeSentiment} />
      {sentiment && (
        <Text style={styles.sentimentText}>Sentiment: {sentiment}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    minHeight: 150,
  },
  sentimentText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default SentimentAnalysis;
