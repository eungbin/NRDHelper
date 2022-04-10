import rareUnits from '../data/Rare.json';
import uniqueUnits from '../data/Unique.json';
import hiddenUnits from '../data/Hidden.json';
import legendUnits from '../data/Legend.json';
import injuryeokUnits from '../data/Injuryeok.json';
import misuUnits from '../data/Misu.json';
import eliteUnits from '../data/Elite.json';
import limitUnits from '../data/limit.json';
import epicUnits from '../data/Epic.json';
import infinityUnits from '../data/infinity.json';

import { 키워드 } from './GetCraftData';

const data = (keyword: string) => {
  const totalKeys: string[] = [];
  const rareKeys: string[] = Object.keys(rareUnits);
  const uniqueKeys: string[] = Object.keys(uniqueUnits);
  const hiddenKeys: string[] = Object.keys(hiddenUnits);
  const legendKeys: string[] = Object.keys(legendUnits);
  const injuryeokKeys: string[] = Object.keys(injuryeokUnits);
  const misuKeys: string[] = Object.keys(misuUnits);
  const eliteKeys: string[] = Object.keys(eliteUnits);
  const limitKeys: string[] = Object.keys(limitUnits);
  const epicKeys: string[] = Object.keys(epicUnits);
  const infinityKeys: string[] = Object.keys(infinityUnits);

  getAllKeys(rareKeys, totalKeys);
  getAllKeys(uniqueKeys, totalKeys);
  getAllKeys(hiddenKeys, totalKeys);
  getAllKeys(legendKeys, totalKeys);
  getAllKeys(injuryeokKeys, totalKeys);
  getAllKeys(misuKeys, totalKeys);
  getAllKeys(eliteKeys, totalKeys);
  getAllKeys(limitKeys, totalKeys);
  getAllKeys(epicKeys, totalKeys);
  getAllKeys(infinityKeys, totalKeys);
  
  if(keyword === "all") {
    return totalKeys;
  } else if(keyword === "마딜") {
    const keywordUnits = totalKeys.filter(v => {
      if(키워드(v).includes(keyword)) {
        if(!(키워드(v).includes("보딜"))) {
          return v;
        }
      }
    });
    return keywordUnits;
  } else {
    const keywordUnits = totalKeys.filter(v => {
      if(키워드(v).includes(keyword)) return v;
    });
    return keywordUnits;
  }
}

const getAllKeys = (units: string[], arrays: string[]) => {
  for(let unit of units) {
    arrays.push(unit);
  }
}

export const getUnitNames = (keyword: any) => {
  return data(keyword);
}