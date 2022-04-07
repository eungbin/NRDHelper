import rareUnits from '../data/Rare.json';
import uniqueUnits from '../data/Unique.json';
import hiddenUnits from '../data/Hidden.json';
import legendUnits from '../data/Legend.json';

const 노말혹은매직 = (unit: string) => {
  let index: number = -1;

  switch(unit) {
    case "나루토[노말]":
      index = 0;
      break;
    case "사쿠라[노말]":
      index = 1;
      break;
    case "사스케[노말]":
      index = 2;
      break;
    case "사이[노말]":
      index = 3;
      break;
    case "사소리[노말]":
      index = 4;
      break;
    case "카린[노말]":
      index = 5;
      break;
    case "암부[노말]":
      index = 6;
      break;
    case "카부토[노말]":
      index = 7;
      break;
    case "야마토[노말]":
      index = 8;
      break;
    case "사스케 주인1[매직]":
      index = 9;
      break;
    case "쥬고[매직]":
      index = 10;
      break;
    case "오로치마루[매직]":
      index = 11;
      break;
    case "지라이야[매직]":
      index = 12;
      break;
    case "제츠[매직]":
      index = 13;
      break;
    case "츠나데[매직]":
      index = 14;
      break;
    case "테마리[매직]":
      index = 15;
      break;
    case "쵸지[매직]":
      index = 16;
      break;
  }

  return index;
}

const 유닛등급얻기 = (unit: string) => {
  const 등급: string = unit.substring(unit.indexOf("[")+1, unit.indexOf("]"));
  return 등급;
}

const 하위유닛얻기 = (unit: string) => {
  const 유닛등급: string = 유닛등급얻기(unit);
  let 하위유닛: string[];

  if(유닛등급 === "레어") 하위유닛 = rareUnits[unit]["하위"];
  else if(유닛등급 === "유니크") 하위유닛 = uniqueUnits[unit]["하위"];
  else if(유닛등급 === "히든") 하위유닛 = hiddenUnits[unit]["하위"];
  else if(유닛등급 === "전설") 하위유닛 = legendUnits[unit]["하위"];

  return 하위유닛;
}

export const 재료유닛얻기 = (unit: string) => {
  let 재료유닛: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const 베이스유닛등급: string = 유닛등급얻기(unit);
  let 하위유닛: string[];

  if(베이스유닛등급 !== "노말" && 베이스유닛등급 !== "매직") {
    하위유닛 = 하위유닛얻기(unit);
  }

  for(let i=0; i<하위유닛.length; i++) {
    let index = 노말혹은매직(하위유닛[i]);
    if(index !== -1) {
      재료유닛[index] += 1;
    } else {
      let 하위재료유닛 = 재료유닛얻기(하위유닛[i]);
      for(let j=0; j<하위재료유닛.length; j++) {
        재료유닛[j] += 하위재료유닛[j];
      }
    }
  }
  return 재료유닛;
}

export const 레어유닛이름: string[] = Object.keys(rareUnits);
export const 유니크유닛이름: string[] = Object.keys(uniqueUnits);
export const 히든유닛이름: string[] = Object.keys(hiddenUnits);
export const 전설유닛이름: string[] = Object.keys(legendUnits);