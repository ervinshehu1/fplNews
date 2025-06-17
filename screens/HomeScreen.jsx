import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const tips = [
  {
    id: "1",
    title: "Captain Picks GW12",
    summary: "Best captain options this week.",
  },
  {
    id: "2",
    title: "Injury News",
    summary: "Key player injuries ahead of deadline.",
  },
  { id: "3", title: "Wildcards", summary: "Strategic tips for wildcard use." },
  {
    id: "4",
    title: "Scout Watch",
    summary: "Who the scouts are backing this GW.",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Fantasy%20Premier%20League&apiKey=c90981cf6a3c41e1be948e74c7e21e20"
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Loading news...
        </Text>
      </SafeAreaView>
    );
  }

  const featuredArticle = articles[0] || {
    title: "No articles found",
    description: "",
    urlToImage: "https://via.placeholder.com/400x200.png?text=No+Image",
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>FPL News</Text>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </View>

        <TouchableOpacity
          style={styles.featuredContainer}
          onPress={() =>
            navigation.navigate("ArticleDetail", { article: featuredArticle })
          }
        >
          <Image
            source={{ uri: featuredArticle.urlToImage }}
            style={styles.featuredImage}
          />
          <View style={styles.featuredOverlay}>
            <Text style={styles.featuredTitle}>{featuredArticle.title}</Text>
            <Text style={styles.featuredSummary}>
              {featuredArticle.description}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.tipsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tipsScroll}
          >
            {tips.map((tip) => (
              <View key={tip.id} style={styles.tipCard}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipSummary}>{tip.summary}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {articles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate("ArticleDetail", { article: item })}
          >
            <Image
              source={{
                uri: item.urlToImage || "https://via.placeholder.com/100",
              }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.summary}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  featuredContainer: {
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    height: 200,
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
  },
  featuredOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  featuredSummary: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 4,
  },
  tipsContainer: {
    height: 120,
    marginBottom: 12,
  },
  tipsScroll: {
    paddingRight: 12,
  },
  tipCard: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    padding: 16,
    marginRight: 12,
    width: 200,
    justifyContent: "center",
  },
  tipTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  tipSummary: {
    color: "#555",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 14,
    color: "#666",
  },
});
