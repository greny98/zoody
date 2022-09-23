import {
  StyleSheet,
  Text,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { Button, Image, ScrollView, Stack, View } from "native-base";
import React, { useState } from "react";
import CharacterBox, { EStatus } from "../../components/CharacterBox";
import { useNavigation } from "@react-navigation/native";
import { practiceData } from "../../db/practice";
import { useRoute } from "@react-navigation/native";

const imgWidth = Math.round(0.8 * Dimensions.get("screen").width);

const bgHeight = Math.round(((5 / 4) * imgWidth) / 6);

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Dễ", level: "easy" },
  { text: "Trung bình", level: "medium" },
  { text: "Khó", level: "hard" },
];

const show: { [key: string]: string } = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

const Practice = () => {
  const [status, setStatus] = useState<EStatus[]>([
    EStatus.NORMAL,
    EStatus.NORMAL,
    EStatus.NORMAL,
  ]);

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const [currQues, setCurrQues] = useState(0);
  const level: string = route.params.level ? route.params.level : "easy";

  const onPress = (i: number) => () => {
    const newStatus = [...status];
    for (let index = 0; index < newStatus.length; index++) {
      newStatus[index] = EStatus.NORMAL;
    }
    newStatus[i] = EStatus.CORRECT;
    setStatus(newStatus);
  };

  return (
    <Stack style={styles.container}>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View style={styles.header}>
        <Text style={styles.text_main}>PRACTICE WITH ZOODY</Text>
        <Text style={styles.text_level}>Mức độ: {show[level]}</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.text__ques}>
          {practiceData[level][currQues].ques}
        </Text>
      </View>
      <View style={styles.box__choose}>
        {practiceData[level][currQues]["choose"].map((item, i) => (
          <CharacterBox
            key={item}
            status={status[i]}
            onPress={onPress(i)}
            content={item}
            style={styles.choose}
          />
        ))}
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Button
          style={styles.btn}
          key={level}
          onPress={() => navigation.navigate("PracticeResultScreen",  { level: level })}
        >
          <Text style={{ color: "#3D7944" }}>TRẢ LỜI</Text>
        </Button>
      </View>
      <Image
        source={require("../../../assets/images/practice-bg.png")}
        width={Math.round(Dimensions.get("screen").height * 0.2)}
        height={Math.round(Dimensions.get("screen").height * 0.3)}
        alt="quiz-bg"
        position="absolute"
        resizeMode="stretch"
        bottom="0"
        style={{ zIndex: -1 }}
      />
    </Stack>
  );
};

export default Practice;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#FFF9EC",
    alignItems: "center",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  text_main: {
    color: "#A1783F",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 80,
  },
  text_level: {
    color: "#3D7944",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  main: {
    marginTop: 40,
    alignItems: "center",
  },
  text__ques: {
    color: "#757575",
    fontSize: 16,
    fontWeight: "700",
  },
  btn: {
    width: "80%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FCD02E",
  },
  box__choose: {
    flexDirection: 'row',
    marginVertical: 20
  },
  choose: {
    width: 50,
    height: 50,
    alignItems: 'center',
  }
});
