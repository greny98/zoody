import { ImageSourcePropType } from "react-native";


export interface QuizzData {
  image: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 1: Cá heo thuộc loại động vật nào?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
    {
      image: require('../../assets/images/tiger-malai.png'),
      ques:"Câu 2: Hình trên là giống hổ Mã Lai?",
      choose:['Đúng','Sai'],
      ans: 0
    },
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 3: HEHE?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
  ],
  medium: [
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 1: Cá heo thuộc loại động vật nào?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
    {
      image: require('../../assets/images/tiger-malai.png'),
      ques:"Câu 2: Hình trên là giống hổ Mã Lai?",
      choose:['Đúng','Sai'],
      ans: 0
    },
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 3: HEHE?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
  ],
  hard: [
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 1: Cá heo thuộc loại động vật nào?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
    {
      image: require('../../assets/images/tiger-malai.png'),
      ques:"Câu 2: Hình trên là giống hổ Mã Lai?",
      choose:['Đúng','Sai'],
      ans: 0
    },
    {
      image: require('../../assets/images/dolphin.png'),
      ques:"Câu 3: HEHE?",
      choose:['Côn trùng','Động vật có vú','Động vật đẻ trứng'],
      ans: 1
    },
  ],
};
