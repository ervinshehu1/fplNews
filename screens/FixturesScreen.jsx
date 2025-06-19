import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const fixturesData = [
  {
    title: "Matchweek 1",
    data: [
      "Fri 15 Aug - 20:00 Liverpool v AFC Bournemouth",
      "Sat 16 Aug - 12:30 Aston Villa v Newcastle United",
      "Sat 16 Aug - Brighton & Hove Albion v Fulham",
      "Sat 16 Aug - Nottingham Forest v Brentford",
      "Sat 16 Aug - Sunderland v West Ham United",
      "Sat 16 Aug - Tottenham Hotspur v Burnley",
      "Sat 16 Aug - 17:30 Wolverhampton Wanderers v Manchester City",
      "Sun 17 Aug - 14:00 Chelsea v Crystal Palace",
      "Sun 17 Aug - 16:30 Manchester United v Arsenal",
      "Mon 18 Aug - 20:00 Leeds United v Everton",
    ],
  },
  {
    title: "Matchweek 2",
    data: [
      "Sat 23 Aug - AFC Bournemouth v Wolverhampton Wanderers",
      "Sat 23 Aug - Arsenal v Leeds United",
      "Sat 23 Aug - Brentford v Aston Villa",
      "Sat 23 Aug - Burnley v Sunderland",
      "Sat 23 Aug - Crystal Palace v Nottingham Forest",
      "Sat 23 Aug - Everton v Brighton & Hove Albion",
      "Sat 23 Aug - Fulham v Manchester United",
      "Sat 23 Aug - Manchester City v Tottenham Hotspur",
      "Sat 23 Aug - Newcastle United v Liverpool",
      "Sat 23 Aug - West Ham United v Chelsea",
    ],
  },
  {
    title: "Matchweek 3",
    data: [
      "Sat 30 Aug - Aston Villa v Crystal Palace",
      "Sat 30 Aug - Brighton & Hove Albion v Manchester City",
      "Sat 30 Aug - Chelsea v Fulham",
      "Sat 30 Aug - Leeds United v Newcastle United",
      "Sat 30 Aug - Liverpool v Arsenal",
      "Sat 30 Aug - Manchester United v Burnley",
      "Sat 30 Aug - Nottingham Forest v West Ham United",
      "Sat 30 Aug - Sunderland v Brentford",
      "Sat 30 Aug - Tottenham Hotspur v AFC Bournemouth",
      "Sat 30 Aug - Wolverhampton Wanderers v Everton",
    ],
  },
  {
    title: "Matchweek 4",
    data: [
      "Sat 13 Sep - AFC Bournemouth v Brighton & Hove Albion",
      "Sat 13 Sep - Arsenal v Nottingham Forest",
      "Sat 13 Sep - Brentford v Chelsea",
      "Sat 13 Sep - Burnley v Liverpool",
      "Sat 13 Sep - Crystal Palace v Sunderland",
      "Sat 13 Sep - Everton v Aston Villa",
      "Sat 13 Sep - Fulham v Leeds United",
      "Sat 13 Sep - Manchester City v Manchester United",
      "Sat 13 Sep - Newcastle United v Wolverhampton Wanderers",
      "Sat 13 Sep - West Ham United v Tottenham Hotspur",
    ],
  },
];

export default function FixturesScreen() {
  const [currentWeek, setCurrentWeek] = useState(0);

  const handlePrev = () => {
    setCurrentWeek((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentWeek((prev) => Math.min(fixturesData.length - 1, prev + 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Premier League Fixtures 2025/26</Text>

      <View style={styles.navigation}>
        <TouchableOpacity onPress={handlePrev} disabled={currentWeek === 0}>
          <Ionicons
            name="chevron-back-circle"
            size={32}
            color={currentWeek === 0 ? "#ccc" : "#000"}
          />
        </TouchableOpacity>

        <Text style={styles.weekTitle}>{fixturesData[currentWeek].title}</Text>

        <TouchableOpacity
          onPress={handleNext}
          disabled={currentWeek === fixturesData.length - 1}
        >
          <Ionicons
            name="chevron-forward-circle"
            size={32}
            color={currentWeek === fixturesData.length - 1 ? "#ccc" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        {fixturesData[currentWeek].data.map((item, index) => {
          const [dateTime, match] = item.split(" - ");
          return (
            <View key={index} style={styles.fixtureItem}>
              <Text style={styles.dateText}>{dateTime}</Text>
              <Text style={styles.matchText}>{match}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    paddingTop: 10,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 14,
    paddingTop: 10,
  },
  weekTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#dcdcdc",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  fixtureItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#bbb",
    paddingVertical: 9,
  },
  dateText: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  matchText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
});
