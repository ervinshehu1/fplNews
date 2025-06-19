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
  },
  {
    title: "Matchweek 10",
    data: [
      "Sat 1 Nov - Brighton & Hove Albion v Leeds United",
      "Sat 1 Nov - Burnley v Arsenal",
      "Sat 1 Nov - Crystal Palace v Brentford",
      "Sat 1 Nov - Fulham v Wolverhampton Wanderers",
      "Sat 1 Nov - Liverpool v Aston Villa",
      "Sat 1 Nov - Manchester City v AFC Bournemouth",
      "Sat 1 Nov - Nottingham Forest v Manchester United",
      "Sat 1 Nov - Sunderland v Everton",
      "Sat 1 Nov - Tottenham Hotspur v Chelsea",
      "Sat 1 Nov - West Ham United v Newcastle United",
    ],
  },
  {
    title: "Matchweek 11",
    data: [
      "Sat 8 Nov - Aston Villa v AFC Bournemouth",
      "Sat 8 Nov - Brentford v Newcastle United",
      "Sat 8 Nov - Chelsea v Wolverhampton Wanderers",
      "Sat 8 Nov - Crystal Palace v Brighton & Hove Albion",
      "Sat 8 Nov - Everton v Fulham",
      "Sat 8 Nov - Manchester City v Liverpool",
      "Sat 8 Nov - Nottingham Forest v Leeds United",
      "Sat 8 Nov - Sunderland v Arsenal",
      "Sat 8 Nov - Tottenham Hotspur v Manchester United",
      "Sat 8 Nov - West Ham United v Burnley",
    ],
  },
  {
    title: "Matchweek 12",
    data: [
      "Sat 22 Nov - AFC Bournemouth v West Ham United",
      "Sat 22 Nov - Arsenal v Tottenham Hotspur",
      "Sat 22 Nov - Brighton & Hove Albion v Brentford",
      "Sat 22 Nov - Burnley v Chelsea",
      "Sat 22 Nov - Fulham v Sunderland",
      "Sat 22 Nov - Leeds United v Aston Villa",
      "Sat 22 Nov - Liverpool v Nottingham Forest",
      "Sat 22 Nov - Manchester United v Everton",
      "Sat 22 Nov - Newcastle United v Manchester City",
      "Sat 22 Nov - Wolverhampton Wanderers v Crystal Palace",
    ],
  },
  {
    title: "Matchweek 13",
    data: [
      "Sat 29 Nov - Aston Villa v Wolverhampton Wanderers",
      "Sat 29 Nov - Brentford v Burnley",
      "Sat 29 Nov - Chelsea v Arsenal",
      "Sat 29 Nov - Crystal Palace v Manchester United",
      "Sat 29 Nov - Everton v Newcastle United",
      "Sat 29 Nov - Manchester City v Leeds United",
      "Sat 29 Nov - Nottingham Forest v Brighton & Hove Albion",
      "Sat 29 Nov - Sunderland v AFC Bournemouth",
      "Sat 29 Nov - Tottenham Hotspur v Fulham",
      "Sat 29 Nov - West Ham United v Liverpool",
    ],
  },
  {
    title: "Matchweek 14",
    data: [
      "Wed 3 Dec - AFC Bournemouth v Everton",
      "Wed 3 Dec - Arsenal v Brentford",
      "Wed 3 Dec - Brighton & Hove Albion v Aston Villa",
      "Wed 3 Dec - Burnley v Crystal Palace",
      "Wed 3 Dec - Fulham v Manchester City",
      "Wed 3 Dec - Leeds United v Chelsea",
      "Wed 3 Dec - Liverpool v Sunderland",
      "Wed 3 Dec - Manchester United v West Ham United",
      "Wed 3 Dec - Newcastle United v Tottenham Hotspur",
      "Wed 3 Dec - Wolverhampton Wanderers v Nottingham Forest",
    ],
  },
  {
    title: "Matchweek 15",
    data: [
      "Sat 6 Dec - AFC Bournemouth v Chelsea",
      "Sat 6 Dec - Aston Villa v Arsenal",
      "Sat 6 Dec - Brighton & Hove Albion v West Ham United",
      "Sat 6 Dec - Everton v Nottingham Forest",
      "Sat 6 Dec - Fulham v Crystal Palace",
      "Sat 6 Dec - Leeds United v Liverpool",
      "Sat 6 Dec - Manchester City v Sunderland",
      "Sat 6 Dec - Newcastle United v Burnley",
      "Sat 6 Dec - Tottenham Hotspur v Brentford",
      "Sat 6 Dec - Wolverhampton Wanderers v Manchester United",
    ],
  },
  {
    title: "Matchweek 16",
    data: [
      "Sat 13 Dec - Arsenal v Wolverhampton Wanderers",
      "Sat 13 Dec - Brentford v Leeds United",
      "Sat 13 Dec - Burnley v Fulham",
      "Sat 13 Dec - Chelsea v Everton",
      "Sat 13 Dec - Crystal Palace v Manchester City",
      "Sat 13 Dec - Liverpool v Brighton & Hove Albion",
      "Sat 13 Dec - Manchester United v AFC Bournemouth",
      "Sat 13 Dec - Nottingham Forest v Tottenham Hotspur",
      "Sat 13 Dec - Sunderland v Newcastle United",
      "Sat 13 Dec - West Ham United v Aston Villa",
    ],
  },
  {
    title: "Matchweek 17",
    data: [
      "Sat 20 Dec - AFC Bournemouth v Burnley",
      "Sat 20 Dec - Aston Villa v Manchester United",
      "Sat 20 Dec - Brighton & Hove Albion v Sunderland",
      "Sat 20 Dec - Everton v Arsenal",
      "Sat 20 Dec - Fulham v Nottingham Forest",
      "Sat 20 Dec - Leeds United v Crystal Palace",
      "Sat 20 Dec - Manchester City v West Ham United",
      "Sat 20 Dec - Newcastle United v Chelsea",
      "Sat 20 Dec - Tottenham Hotspur v Liverpool",
      "Sat 20 Dec - Wolverhampton Wanderers v Brentford",
    ],
  },
  {
    title: "Matchweek 18",
    data: [
      "Sat 27 Dec - Arsenal v Brighton & Hove Albion",
      "Sat 27 Dec - Brentford v AFC Bournemouth",
      "Sat 27 Dec - Burnley v Everton",
      "Sat 27 Dec - Chelsea v Aston Villa",
      "Sat 27 Dec - Crystal Palace v Tottenham Hotspur",
      "Sat 27 Dec - Liverpool v Wolverhampton Wanderers",
      "Sat 27 Dec - Manchester United v Newcastle United",
      "Sat 27 Dec - Nottingham Forest v Manchester City",
      "Sat 27 Dec - Sunderland v Leeds United",
      "Sat 27 Dec - West Ham United v Fulham",
    ],
  },
  {
    title: "Matchweek 19",
    data: [
      "Tue 30 Dec - Arsenal v Aston Villa",
      "Tue 30 Dec - Brentford v Tottenham Hotspur",
      "Tue 30 Dec - Burnley v Newcastle United",
      "Tue 30 Dec - Chelsea v AFC Bournemouth",
      "Tue 30 Dec - Crystal Palace v Fulham",
      "Tue 30 Dec - Liverpool v Leeds United",
      "Tue 30 Dec - Manchester United v Wolverhampton Wanderers",
      "Tue 30 Dec - Nottingham Forest v Everton",
      "Tue 30 Dec - Sunderland v Manchester City",
      "Tue 30 Dec - West Ham United v Brighton & Hove Albion",
    ],
  },
  {
    title: "Matchweek 20",
    data: [
      "Sat 3 Jan - AFC Bournemouth v Arsenal",
      "Sat 3 Jan - Aston Villa v Nottingham Forest",
      "Sat 3 Jan - Brighton & Hove Albion v Burnley",
      "Sat 3 Jan - Everton v Brentford",
      "Sat 3 Jan - Fulham v Liverpool",
      "Sat 3 Jan - Leeds United v Manchester United",
      "Sat 3 Jan - Manchester City v Chelsea",
      "Sat 3 Jan - Newcastle United v Crystal Palace",
      "Sat 3 Jan - Tottenham Hotspur v Sunderland",
      "Sat 3 Jan - Wolverhampton Wanderers v West Ham United",
    ],
  },
  {
    title: "Matchweek 21",
    data: [
      "Wed 7 Jan - AFC Bournemouth v Tottenham Hotspur",
      "Wed 7 Jan - Arsenal v Liverpool",
      "Wed 7 Jan - Brentford v Sunderland",
      "Wed 7 Jan - Burnley v Manchester United",
      "Wed 7 Jan - Crystal Palace v Aston Villa",
      "Wed 7 Jan - Everton v Wolverhampton Wanderers",
      "Wed 7 Jan - Fulham v Chelsea",
      "Wed 7 Jan - Manchester City v Brighton & Hove Albion",
      "Wed 7 Jan - Newcastle United v Leeds United",
      "Wed 7 Jan - West Ham United v Nottingham Forest",
    ],
  },
  {
    title: "Matchweek 22",
    data: [
      "Sat 17 Jan - Aston Villa v Everton",
      "Sat 17 Jan - Brighton & Hove Albion v AFC Bournemouth",
      "Sat 17 Jan - Chelsea v Brentford",
      "Sat 17 Jan - Leeds United v Fulham",
      "Sat 17 Jan - Liverpool v Burnley",
      "Sat 17 Jan - Manchester United v Manchester City",
      "Sat 17 Jan - Nottingham Forest v Arsenal",
      "Sat 17 Jan - Sunderland v Crystal Palace",
      "Sat 17 Jan - Tottenham Hotspur v West Ham United",
      "Sat 17 Jan - Wolverhampton Wanderers v Newcastle United",
    ],
  },
  {
    title: "Matchweek 23",
    data: [
      "Sat 24 Jan - AFC Bournemouth v Liverpool",
      "Sat 24 Jan - Arsenal v Manchester United",
      "Sat 24 Jan - Brentford v Nottingham Forest",
      "Sat 24 Jan - Burnley v Tottenham Hotspur",
      "Sat 24 Jan - Crystal Palace v Chelsea",
      "Sat 24 Jan - Everton v Leeds United",
      "Sat 24 Jan - Fulham v Brighton & Hove Albion",
      "Sat 24 Jan - Manchester City v Wolverhampton Wanderers",
      "Sat 24 Jan - Newcastle United v Aston Villa",
      "Sat 24 Jan - West Ham United v Sunderland",
    ],
  },
  {
    title: "Matchweek 24",
    data: [
      "Sat 31 Jan - Aston Villa v Brentford",
      "Sat 31 Jan - Brighton & Hove Albion v Everton",
      "Sat 31 Jan - Chelsea v West Ham United",
      "Sat 31 Jan - Leeds United v Arsenal",
      "Sat 31 Jan - Liverpool v Newcastle United",
      "Sat 31 Jan - Manchester United v Fulham",
      "Sat 31 Jan - Nottingham Forest v Crystal Palace",
      "Sat 31 Jan - Sunderland v Burnley",
      "Sat 31 Jan - Tottenham Hotspur v Manchester City",
      "Sat 31 Jan - Wolverhampton Wanderers v AFC Bournemouth",
    ],
  },
  {
    title: "Matchweek 25",
    data: [
      "Sat 7 Feb - AFC Bournemouth v Aston Villa",
      "Sat 7 Feb - Arsenal v Sunderland",
      "Sat 7 Feb - Brighton & Hove Albion v Crystal Palace",
      "Sat 7 Feb - Burnley v West Ham United",
      "Sat 7 Feb - Fulham v Everton",
      "Sat 7 Feb - Leeds United v Nottingham Forest",
      "Sat 7 Feb - Liverpool v Manchester City",
      "Sat 7 Feb - Manchester United v Tottenham Hotspur",
      "Sat 7 Feb - Newcastle United v Brentford",
      "Sat 7 Feb - Wolverhampton Wanderers v Chelsea",
    ],
  },
  {
    title: "Matchweek 26",
    data: [
      "Wed 11 Feb - Aston Villa v Brighton & Hove Albion",
      "Wed 11 Feb - Brentford v Arsenal",
      "Wed 11 Feb - Chelsea v Leeds United",
      "Wed 11 Feb - Crystal Palace v Burnley",
      "Wed 11 Feb - Everton v AFC Bournemouth",
      "Wed 11 Feb - Manchester City v Fulham",
      "Wed 11 Feb - Nottingham Forest v Wolverhampton Wanderers",
      "Wed 11 Feb - Sunderland v Liverpool",
      "Wed 11 Feb - Tottenham Hotspur v Newcastle United",
      "Wed 11 Feb - West Ham United v Manchester United",
    ],
  },
  {
    title: "Matchweek 27",
    data: [
      "Sat 21 Feb - Aston Villa v Leeds United",
      "Sat 21 Feb - Brentford v Brighton & Hove Albion",
      "Sat 21 Feb - Chelsea v Burnley",
      "Sat 21 Feb - Crystal Palace v Wolverhampton Wanderers",
      "Sat 21 Feb - Everton v Manchester United",
      "Sat 21 Feb - Manchester City v Newcastle United",
      "Sat 21 Feb - Nottingham Forest v Liverpool",
      "Sat 21 Feb - Sunderland v Fulham",
      "Sat 21 Feb - Tottenham Hotspur v Arsenal",
      "Sat 21 Feb - West Ham United v AFC Bournemouth",
    ],
  },
  {
    title: "Matchweek 28",
    data: [
      "Sat 28 Feb - AFC Bournemouth v Sunderland",
      "Sat 28 Feb - Arsenal v Chelsea",
      "Sat 28 Feb - Brighton & Hove Albion v Nottingham Forest",
      "Sat 28 Feb - Burnley v Brentford",
      "Sat 28 Feb - Fulham v Tottenham Hotspur",
      "Sat 28 Feb - Leeds United v Manchester City",
      "Sat 28 Feb - Liverpool v West Ham United",
      "Sat 28 Feb - Manchester United v Crystal Palace",
      "Sat 28 Feb - Newcastle United v Everton",
      "Sat 28 Feb - Wolverhampton Wanderers v Aston Villa",
    ],
  },
  {
    title: "Matchweek 29",
    data: [
      "Wed 4 Mar - AFC Bournemouth v Brentford",
      "Wed 4 Mar - Aston Villa v Chelsea",
      "Wed 4 Mar - Brighton & Hove Albion v Arsenal",
      "Wed 4 Mar - Everton v Burnley",
      "Wed 4 Mar - Fulham v West Ham United",
      "Wed 4 Mar - Leeds United v Sunderland",
      "Wed 4 Mar - Manchester City v Nottingham Forest",
      "Wed 4 Mar - Newcastle United v Manchester United",
      "Wed 4 Mar - Tottenham Hotspur v Crystal Palace",
      "Wed 4 Mar - Wolverhampton Wanderers v Liverpool",
    ],
  },
  {
    title: "Matchweek 30",
    data: [
      "Sat 14 Mar - Arsenal v Everton",
      "Sat 14 Mar - Brentford v Wolverhampton Wanderers",
      "Sat 14 Mar - Burnley v AFC Bournemouth",
      "Sat 14 Mar - Chelsea v Newcastle United",
      "Sat 14 Mar - Crystal Palace v Leeds United",
      "Sat 14 Mar - Liverpool v Tottenham Hotspur",
      "Sat 14 Mar - Manchester United v Aston Villa",
      "Sat 14 Mar - Nottingham Forest v Fulham",
      "Sat 14 Mar - Sunderland v Brighton & Hove Albion",
      "Sat 14 Mar - West Ham United v Manchester City",
    ],
  },
  {
    title: "Matchweek 31",
    data: [
      "Sat 21 Mar - AFC Bournemouth v Manchester United",
      "Sat 21 Mar - Aston Villa v West Ham United",
      "Sat 21 Mar - Brighton & Hove Albion v Liverpool",
      "Sat 21 Mar - Everton v Chelsea",
      "Sat 21 Mar - Fulham v Burnley",
      "Sat 21 Mar - Leeds United v Brentford",
      "Sat 21 Mar - Manchester City v Crystal Palace",
      "Sat 21 Mar - Newcastle United v Sunderland",
      "Sat 21 Mar - Tottenham Hotspur v Nottingham Forest",
      "Sat 21 Mar - Wolverhampton Wanderers v Arsenal",
    ],
  },
  {
    title: "Matchweek 32",
    data: [
      "Sat 11 Apr - Arsenal v AFC Bournemouth",
      "Sat 11 Apr - Brentford v Everton",
      "Sat 11 Apr - Burnley v Brighton & Hove Albion",
      "Sat 11 Apr - Chelsea v Manchester City",
      "Sat 11 Apr - Crystal Palace v Newcastle United",
      "Sat 11 Apr - Liverpool v Fulham",
      "Sat 11 Apr - Manchester United v Leeds United",
      "Sat 11 Apr - Nottingham Forest v Aston Villa",
      "Sat 11 Apr - Sunderland v Tottenham Hotspur",
      "Sat 11 Apr - West Ham United v Wolverhampton Wanderers",
    ],
  },
  {
    title: "Matchweek 33",
    data: [
      "Sat 18 Apr - Aston Villa v Sunderland",
      "Sat 18 Apr - Brentford v Fulham",
      "Sat 18 Apr - Chelsea v Manchester United",
      "Sat 18 Apr - Crystal Palace v West Ham United",
      "Sat 18 Apr - Everton v Liverpool",
      "Sat 18 Apr - Leeds United v Wolverhampton Wanderers",
      "Sat 18 Apr - Manchester City v Arsenal",
      "Sat 18 Apr - Newcastle United v AFC Bournemouth",
      "Sat 18 Apr - Nottingham Forest v Burnley",
      "Sat 18 Apr - Tottenham Hotspur v Brighton & Hove Albion",
    ],
  },
  {
    title: "Matchweek 34",
    data: [
      "Sat 25 Apr - AFC Bournemouth v Leeds United",
      "Sat 25 Apr - Arsenal v Newcastle United",
      "Sat 25 Apr - Brighton & Hove Albion v Chelsea",
      "Sat 25 Apr - Burnley v Manchester City",
      "Sat 25 Apr - Fulham v Aston Villa",
      "Sat 25 Apr - Liverpool v Crystal Palace",
      "Sat 25 Apr - Manchester United v Brentford",
      "Sat 25 Apr - Sunderland v Nottingham Forest",
      "Sat 25 Apr - West Ham United v Everton",
      "Sat 25 Apr - Wolverhampton Wanderers v Tottenham Hotspur",
    ],
  },
  {
    title: "Matchweek 35",
    data: [
      "Sat 2 May - AFC Bournemouth v Crystal Palace",
      "Sat 2 May - Arsenal v Fulham",
      "Sat 2 May - Aston Villa v Tottenham Hotspur",
      "Sat 2 May - Brentford v West Ham United",
      "Sat 2 May - Chelsea v Nottingham Forest",
      "Sat 2 May - Everton v Manchester City",
      "Sat 2 May - Leeds United v Burnley",
      "Sat 2 May - Manchester United v Liverpool",
      "Sat 2 May - Newcastle United v Brighton & Hove Albion",
      "Sat 2 May - Wolverhampton Wanderers v Sunderland",
    ],
  },
  {
    title: "Matchweek 36",
    data: [
      "Sat 9 May - Brighton & Hove Albion v Wolverhampton Wanderers",
      "Sat 9 May - Burnley v Aston Villa",
      "Sat 9 May - Crystal Palace v Everton",
      "Sat 9 May - Fulham v AFC Bournemouth",
      "Sat 9 May - Liverpool v Chelsea",
      "Sat 9 May - Manchester City v Brentford",
      "Sat 9 May - Nottingham Forest v Newcastle United",
      "Sat 9 May - Sunderland v Manchester United",
      "Sat 9 May - Tottenham Hotspur v Leeds United",
      "Sat 9 May - West Ham United v Arsenal",
    ],
  },
  {
    title: "Matchweek 37",
    data: [
      "Sun 17 May - AFC Bournemouth v Manchester City",
      "Sun 17 May - Arsenal v Burnley",
      "Sun 17 May - Aston Villa v Liverpool",
      "Sun 17 May - Brentford v Crystal Palace",
      "Sun 17 May - Chelsea v Tottenham Hotspur",
      "Sun 17 May - Everton v Sunderland",
      "Sun 17 May - Leeds United v Brighton & Hove Albion",
      "Sun 17 May - Manchester United v Nottingham Forest",
      "Sun 17 May - Newcastle United v West Ham United",
      "Sun 17 May - Wolverhampton Wanderers v Fulham",
    ],
  },
  {
    title: "Matchweek 38",
    data: [
      "Sun 24 May - Brighton & Hove Albion v Manchester United",
      "Sun 24 May - Burnley v Wolverhampton Wanderers",
      "Sun 24 May - Crystal Palace v Arsenal",
      "Sun 24 May - Fulham v Newcastle United",
      "Sun 24 May - Liverpool v Brentford",
      "Sun 24 May - Manchester City v Aston Villa",
      "Sun 24 May - Nottingham Forest v AFC Bournemouth",
      "Sun 24 May - Sunderland v Chelsea",
      "Sun 24 May - Tottenham Hotspur v Everton",
      "Sun 24 May - West Ham United v Leeds United",
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
