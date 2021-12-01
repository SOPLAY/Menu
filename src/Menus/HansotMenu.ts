// import { XMLBuilder } from "fast-xml-parser";

type HansotMenuTpye = {
  mainMenu: { menu: string; price: number }[];
  subMenu: { menu: string; price: number }[];
};
export const HansotMenu: HansotMenuTpye = {
  mainMenu: [
    { menu: "마파두부 덮밥", price: 5000 },
    { menu: "두부강정 야채비빔밥", price: 4800 },
    { menu: "두부연근튀김", price: 3000 },
    { menu: "리얼 티라미수 찰떡", price: 1500 },
    { menu: "후라이드 순살(중)", price: 7000 },
    { menu: "후라이드 순살(소)_양념치킨소스", price: 3500 },
    { menu: "후라이드 순살(소)_케이준소스", price: 3500 },
    { menu: "매화(치킨 / 연어구이)", price: 10000 },
    { menu: "매화(순살 고등어 간장구이)", price: 10000 },
    { menu: "진달래", price: 7000 },
    { menu: "개나리(순살 고등어 간장구이)", price: 8000 },
    { menu: "치킨스테이크 스페셜", price: 10000 },
    { menu: "돈까스도련님고기고기", price: 5600 },
    { menu: "탕수육도련님고기고기", price: 5800 },
    { menu: "새치 고기고기", price: 6000 },
    { menu: "돈치 고기고기", price: 5300 },
    { menu: "고기고기", price: 4200 },
    { menu: "숯불직화구이", price: 6500 },
    { menu: "소불고기", price: 5000 },
    { menu: "메가치킨제육", price: 6900 },
    { menu: "칠리 찹쌀탕수육도련님", price: 4200 },
    { menu: "동백", price: 5200 },
    { menu: "치킨제육", price: 4400 },
    { menu: "돈까스도련님", price: 4000 },
    { menu: "제육볶음", price: 4100 },
    { menu: "돈치스팸 도시락", price: 4600 },
    { menu: "고추장숯불삼겹정식", price: 9000 },
    { menu: "숯불삼겹정식", price: 8500 },
    { menu: "제육 김치찌개 정식", price: 8000 },
    { menu: "돈치스팸 김치찌개 정식", price: 8000 },
    { menu: "빅치킨마요 김치찌개 정식", price: 6900 },
    { menu: "치킨마요 김치찌개 정식", price: 6300 },
    { menu: "메가스팸마요", price: 5600 },
    { menu: "스팸마요", price: 3600 },
    { menu: "비벼먹는 치킨마요 김밥", price: 4300 },
    { menu: "비벼먹는 참치마요 김밥", price: 4300 },
    { menu: "비벼먹는 소불고기마요 김밥", price: 4300 },
    { menu: "메가치킨마요", price: 5300 },
    { menu: "왕치킨마요", price: 4300 },
    { menu: "빅치킨마요", price: 3600 },
    { menu: "치킨마요", price: 3000 },
    { menu: "참치마요", price: 3000 },
    { menu: "돈치마요", price: 3600 },
    { menu: "치즈 카레도시락", price: 4100 },
    { menu: "돈까스 카레", price: 4100 },
    { menu: "3종치즈 김치볶음밥", price: 4800 },
    { menu: "스팸 김치볶음밥", price: 4600 },
    { menu: "김치볶음밥", price: 3900 },
    { menu: "스팸철판볶음밥", price: 4500 },
    { menu: "소불고기 철판볶음밥", price: 4500 },
    { menu: "소고기 육개장", price: 4700 },
    { menu: "묵은지 김치찌개", price: 4500 },
    { menu: "고추장숯불삼겹덮밥", price: 6500 },
    { menu: "숯불직화구이 덮밥", price: 5700 },
    { menu: "왕카레돈까스덮밥", price: 5600 },
    { menu: "치킨스테이크 덮밥", price: 5700 },
    { menu: "새우돈까스 덮밥", price: 3900 },
    { menu: "돈까스 덮밥", price: 3800 },
    { menu: "소불고기 감초고추장 비빔밥", price: 4800 },
    { menu: "시골제육 두부강된장 비빔밥", price: 4800 },
    { menu: "참치야채 감초고추장", price: 3200 },
    { menu: "열무 두부강된장 비빔밥", price: 4300 },
    { menu: "튼튼도시락", price: 5000 },
  ],
  subMenu: [
    { menu: "반찬 계란말이", price: 2500 },
    { menu: "반찬 치즈계란말이", price: 3000 },
    { menu: "반찬 묵은지김치찌개", price: 3900 },
    { menu: "반찬 소고기육개장", price: 4300 },
    { menu: "반찬 카레", price: 2600 },
    { menu: "반찬 소불고기", price: 3900 },
    { menu: "반찬 순살 고등어데리야끼", price: 3600 },
    { menu: "반찬 치킨", price: 3300 },
    { menu: "반찬 고기고기", price: 3200 },
    { menu: "반찬 돈까스 도련님", price: 3300 },
    { menu: "반찬 제육볶음", price: 3100 },
    { menu: "반찬 토네이도 소세지", price: 2600 },
    { menu: "반찬 돈까스", price: 2600 },
    { menu: "리얼꿀 미니호떡", price: 2200 },
    { menu: "바삭 군만두", price: 2000 },
    { menu: "미니 찹쌀핫도그", price: 2500 },
    { menu: "미니 찹쌀탕수육", price: 2200 },
    { menu: "감자고로케", price: 2200 },
    { menu: "케이준후라이", price: 1500 },
    { menu: "고메이 크림 고로케", price: 3500 },
    { menu: "국물떡볶이 & 토네이도소세지 튀김set", price: 5300 },
    { menu: "국물 떡볶이", price: 3000 },
    { menu: "토네이도 소세지 튀김세트", price: 2900 },
    { menu: "찹쌀탕수육박스(대)", price: 10000 },
    { menu: "찹쌀탕수육박스(중)", price: 5000 },
    { menu: "오리지널 닭강정(중)", price: 7500 },
    { menu: "오리지널 닭강정(소)", price: 2800 },
    { menu: "치킨 BOX(대)", price: 10000 },
    { menu: "치킨BOX(중)_양식소스", price: 5000 },
    { menu: "치킨BOX(중)_타르타르소스", price: 5000 },
    { menu: "오징어젓갈", price: 400 },
    { menu: "오이지무침", price: 700 },
    { menu: "한솥 두부강된장소스", price: 1800 },
    { menu: "한솥 감초볶음고추장소스", price: 500 },
    { menu: "볶음김치", price: 400 },
    { menu: "김치", price: 300 },
    { menu: "무말랭이 무침", price: 300 },
    { menu: "한솥밥", price: 1000 },
    { menu: "현미밥", price: 1700 },
    { menu: "아이스 애플망고", price: 1500 },
  ],
};

export const getMainMenu = () => {
  const index = Math.floor(Math.random() * HansotMenu.mainMenu.length);
  const { menu, price } = HansotMenu.mainMenu[index];
  return { menu, price };
};

export const getSubMenu = () => {
  const index = Math.floor(Math.random() * HansotMenu.subMenu.length);
  const { menu, price } = HansotMenu.subMenu[index];
  return { menu, price };
};

// export const getXML = () => {
//   const builder = new XMLBuilder({
//     arrayNodeName: "Menu",
//   });
//   const xml = builder.build(HansotMenu);
//   console.log(xml);
// };
