import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useRoute } from "@react-navigation/native";

export default function ArticleDetailScreen() {
  const route = useRoute();
  const { article } = route.params;

  if (!article) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No article data available.</Text>
      </View>
    );
  }

  const openInBrowser = () => {
    if (article.url) {
      Linking.openURL(article.url);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {article.urlToImage && (
        <Image
          source={{ uri: article.urlToImage }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Text style={styles.title}>{article.title}</Text>

      {article.description && (
        <Text style={styles.content}>{article.description}</Text>
      )}

      {article.content && (
        <Text style={styles.content}>
          {article.content.replace(/\[\+\d+ chars\]/, "")}
        </Text>
      )}

      <TouchableOpacity onPress={openInBrowser} style={styles.button}>
        <Text style={styles.buttonText}>Read Full Article</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
