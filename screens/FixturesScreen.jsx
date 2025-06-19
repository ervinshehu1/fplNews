import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

// Parsed static data grouped by Matchweek
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
      "Sat 16 Aug - 17:30 Wolverhampton Wanderers v Manchester City (Sky Sports)",
      "Sun 17 Aug - 14:00 Chelsea v Crystal Palace (Sky Sports)",
      "Sun 17 Aug - 16:30 Manchester United v Arsenal (Sky Sports)",
      "Mon 18 Aug - 20:00 Leeds United v Everton (Sky Sports)",
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
  {
    title: "Matchweek 5",
    data: [
      "Sat 20 Sep - AFC Bournemouth v Newcastle United",
      "Sat 20 Sep - Arsenal v Manchester City",
      "Sat 20 Sep - Brighton & Hove Albion v Tottenham Hotspur",
      "Sat 20 Sep - Burnley v Nottingham Forest",
      "Sat 20 Sep - Fulham v Brentford",
      "Sat 20 Sep - Liverpool v Everton",
      "Sat 20 Sep - Manchester United v Chelsea",
      "Sat 20 Sep - Sunderland v Aston Villa",
      "Sat 20 Sep - West Ham United v Crystal Palace",
      "Sat 20 Sep - Wolverhampton Wanderers v Leeds United",
    ],
  },
  {
    title: "Matchweek 6",
    data: [
      "Sat 27 Sep - Aston Villa v Fulham",
      "Sat 27 Sep - Brentford v Manchester United",
      "Sat 27 Sep - Chelsea v Brighton & Hove Albion",
      "Sat 27 Sep - Crystal Palace v Liverpool",
      "Sat 27 Sep - Everton v West Ham United",
      "Sat 27 Sep - Leeds United v AFC Bournemouth",
      "Sat 27 Sep - Manchester City v Burnley",
      "Sat 27 Sep - Newcastle United v Arsenal",
      "Sat 27 Sep - Nottingham Forest v Sunderland",
      "Sat 27 Sep - Tottenham Hotspur v Wolverhampton Wanderers",
    ],
  },
  {
    title: "Matchweek 7",
    data: [
      "Sat 4 Oct - AFC Bournemouth v Fulham",
      "Sat 4 Oct - Arsenal v West Ham United",
      "Sat 4 Oct - Aston Villa v Burnley",
      "Sat 4 Oct - Brentford v Manchester City",
      "Sat 4 Oct - Chelsea v Liverpool",
      "Sat 4 Oct - Everton v Crystal Palace",
      "Sat 4 Oct - Leeds United v Tottenham Hotspur",
      "Sat 4 Oct - Manchester United v Sunderland",
      "Sat 4 Oct - Newcastle United v Nottingham Forest",
      "Sat 4 Oct - Wolverhampton Wanderers v Brighton & Hove Albion",
    ],
  },
  {
    title: "Matchweek 8",
    data: [
      "Sat 18 Oct - Brighton & Hove Albion v Newcastle United",
      "Sat 18 Oct - Burnley v Leeds United",
      "Sat 18 Oct - Crystal Palace v AFC Bournemouth",
      "Sat 18 Oct - Fulham v Arsenal",
      "Sat 18 Oct - Liverpool v Manchester United",
      "Sat 18 Oct - Manchester City v Everton",
      "Sat 18 Oct - Nottingham Forest v Chelsea",
      "Sat 18 Oct - Sunderland v Wolverhampton Wanderers",
      "Sat 18 Oct - Tottenham Hotspur v Aston Villa",
      "Sat 18 Oct - West Ham United v Brentford",
    ],
  },
  {
    title: "Matchweek 9",
    data: [
      "Sat 25 Oct - AFC Bournemouth v Nottingham Forest",
      "Sat 25 Oct - Arsenal v Crystal Palace",
      "Sat 25 Oct - Aston Villa v Manchester City",
      "Sat 25 Oct - Brentford v Liverpool",
      "Sat 25 Oct - Chelsea v Sunderland",
      "Sat 25 Oct - Everton v Tottenham Hotspur",
      "Sat 25 Oct - Leeds United v West Ham United",
      "Sat 25 Oct - Manchester United v Brighton & Hove Albion",
      "Sat 25 Oct - Newcastle United v Fulham",
      "Sat 25 Oct - Wolverhampton Wanderers v Burnley",
    ],
  }
];

export default function FixturesScreen() {
  const [expandedWeeks, setExpandedWeeks] = useState([]);

  const toggleWeek = (title) => {
    setExpandedWeeks((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  const renderItem = ({ item, section }) => {
    if (!expandedWeeks.includes(section.title)) return null;
    return <Text style={styles.match}>{item}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Premier League Fixtures 2025/26</Text>
      <SectionList
        sections={fixturesData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <TouchableOpacity onPress={() => toggleWeek(title)}>
            <View style={styles.weekHeader}>
              <Text style={styles.weekTitle}>{title}</Text>
              <Text style={styles.arrow}>
                {expandedWeeks.includes(title) ? "▲" : "▼"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    paddingTop: 18,
  },
  weekHeader: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  weekTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  arrow: {
    fontSize: 18,
    color: "#888",
  },
  match: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
});
