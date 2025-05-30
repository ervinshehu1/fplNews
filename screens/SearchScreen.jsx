import React, { useState } from "react";
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

const articles = [
  {
    id: "1",
    title: "Top 5 Midfielders for GW12",
    summary: "Best midfielders to pick this week.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Captain Picks GW12",
    summary: "Top captains for this gameweek.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Injury Updates",
    summary: "Who's out and who's back for GW12.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Wildcard Strategy",
    summary: "Best way to use your wildcard chip.",
    image: "https://via.placeholder.com/150",
  },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // For now, filtering just by search query; you can later add filter logic for selectedFilter
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.summary.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.titleText}>Search</Text>
        <Ionicons name="filter-outline" size={24} color="#333" />
      </View>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="Search articles..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Filter Buttons */}
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

      {/* Results */}
      {filteredArticles.length > 0 ? (
        <FlatList
          data={filteredArticles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
  noResults: {
    textAlign: "center",
    color: "#888",
    marginTop: 40,
    fontSize: 16,
  },
});
