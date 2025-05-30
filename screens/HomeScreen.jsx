import React from "react";
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

const articles = Array.from({ length: 20 }, (_, i) => ({
  id: String(i + 1),
  title: `Article ${i + 1}`,
  summary: `This is a summary of article ${i + 1}`,
  image:
    "https://www.fantasyfootballfix.com/media/images/FPL_Top_5_Players_MESq5t0.max-80.width-1200.format-webp.webp",
}));

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderArticle = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ArticleDetail", { article: item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
       
        <View style={styles.topBar}>
          <Text style={styles.appTitle}>FPL News</Text>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </View>

    
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

        
        <FlatList
          data={articles}
          renderItem={renderArticle}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
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
