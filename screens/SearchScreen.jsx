import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const TEAM_KEYWORDS = [
    "arsenal",
    "chelsea",
    "liverpool",
    "manchester",
    "tottenham",
    "villa",
    "newcastle",
    "brighton",
  ];
  const POSITION_KEYWORDS = [
    "goalkeeper",
    "defender",
    "midfielder",
    "forward",
    "striker",
  ];
  const GAMEWEEK_KEYWORDS = ["gw", "gameweek"];

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Fantasy%20Premier%20League&apiKey=c90981cf6a3c41e1be948e74c7e21e20"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  const matchesFilter = (article) => {
    const text =
      (article.title + " " + article.description).toLowerCase();

    if (selectedFilter === "Gameweek") {
      return GAMEWEEK_KEYWORDS.some((kw) => text.includes(kw));
    }
    if (selectedFilter === "Position") {
      return POSITION_KEYWORDS.some((kw) => text.includes(kw));
    }
    if (selectedFilter === "Team") {
      return TEAM_KEYWORDS.some((kw) => text.includes(kw));
    }
    return true;
  };

  const filteredArticles = articles.filter(
    (article) =>
      matchesFilter(article) &&
      (article.title?.toLowerCase().includes(query.toLowerCase()) ||
        article.description?.toLowerCase().includes(query.toLowerCase()))
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={styles.card}
      onPress={() => navigation.navigate("ArticleDetail", { article: item })}
    >
      <Image
        source={{ uri: item.urlToImage || "https://via.placeholder.com/100" }}
        style={styles.thumbnail}
        resizeMode="cover"
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
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.titleText}>Search</Text>
        <Ionicons name="filter-outline" size={24} color="#333" />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Search articles..."
        value={query}
        onChangeText={setQuery}
      />

      <View style={styles.filterRow}>
        {["All", "Gameweek", "Position", "Team"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <Text style={styles.noResults}>Loading articles...</Text>
      ) : filteredArticles.length > 0 ? (
        <FlatList
          data={filteredArticles}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      ) : (
        <Text style={styles.noResults}>No results found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  filterRow: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: "#333",
    borderColor: "#333",
  },
  filterText: {
    color: "#333",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#fff",
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
  thumbnail: {
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
  noResults: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
    fontSize: 16,
  },
});
