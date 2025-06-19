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
  RefreshControl,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const tips = Array.from({ length: 38 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `GAMEWEEK ${i + 1}`,
  summary: "All and Best news for this week.",
}));

const categories = [
  "All",
  "Injuries",
  "Transfers",
  "Wildcard",
  "Captain Picks",
  "Team News",
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchArticles = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=Fantasy%20Premier%20League&apiKey=c90981cf6a3c41e1be948e74c7e21e20"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
        setRefreshing(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchArticles();
  };

  const filteredArticles = articles.filter((article) => {
    const title = article.title?.toLowerCase() || "";
    const description = article.description?.toLowerCase() || "";

    if (selectedCategory === "All") return true;

    return (
      title.includes(selectedCategory.toLowerCase()) ||
      description.includes(selectedCategory.toLowerCase())
    );
  });

  const featuredArticle = filteredArticles[0] || {
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>FPL News</Text>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
            <Text style={styles.featuredTitle} numberOfLines={2}>
              {featuredArticle.title}
            </Text>
            <Text style={styles.featuredSummary} numberOfLines={2}>
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
            {tips.slice(0, 10).map((tip) => (
              <TouchableOpacity
                key={tip.id}
                style={[
                  styles.tipCard,
                  selectedCategory === tip.title && { backgroundColor: "#333" },
                ]}
                onPress={() =>
                  setSelectedCategory((prev) =>
                    prev === tip.title ? "All" : tip.title
                  )
                }
              >
                <Text
                  style={[
                    styles.tipTitle,
                    selectedCategory === tip.title && { color: "#fff" },
                  ]}
                >
                  {tip.title}
                </Text>
                <Text
                  style={[
                    styles.tipSummary,
                    selectedCategory === tip.title && { color: "#fff" },
                  ]}
                >
                  {tip.summary}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {filteredArticles.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              navigation.navigate("ArticleDetail", { article: item })
            }
          >
            <Image
              source={{
                uri: item.urlToImage || "https://via.placeholder.com/100",
              }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.summary} numberOfLines={3}>
                {item.description}
              </Text>
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
  categoryScroll: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 10,
    paddingLeft: 4,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: "#333",
  },
  categoryText: {
    color: "#333",
    fontSize: 14,
  },
  categoryTextActive: {
    color: "#fff",
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
    alignItems: "center",
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  summary: {
    fontSize: 14,
    color: "#666",
  },
});
