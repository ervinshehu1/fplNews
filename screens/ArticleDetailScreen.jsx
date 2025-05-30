import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function ArticleDetailScreen({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.summary}>{article.summary}</Text>
        <Text style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, risus at sagittis efficitur, lorem sem viverra ligula,
          in suscipit purus metus a justo. Duis commodo, lorem id congue
          vehicula, turpis purus porttitor neque, vel tincidunt mauris eros in
          erat. Vivamus fermentum est at magna convallis, a tincidunt lorem
          gravida. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    color: "#444",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});
