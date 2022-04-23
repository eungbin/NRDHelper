import uniqueUnits from '../data/Unique.json';
import hiddenUnits from '../data/Hidden.json';
import legendUnits from '../data/Legend.json';
import injuryeokUnits from '../data/Injuryeok.json';
import misuUnits from '../data/Misu.json';
import eliteUnits from '../data/Elite.json';
import limitUnits from '../data/limit.json';
import epicUnits from '../data/Epic.json';
import infinityUnits from '../data/infinity.json';
import { 재료유닛얻기 } from './GetCraftData';

export const getHighTierPotential = (units, highUnit) => {
  const material = 재료유닛얻기(highUnit);
  const totalMaterial: number = material.reduce((acc, cur) => {
    return acc + cur;
  })

  let lackUnit: number = 0;

  for(let i=0; i<units.length; i++) {
    if(units[i] < material[i]) {
      lackUnit += material[i] - units[i];
    }
  }

  let potential = (totalMaterial-lackUnit)/totalMaterial*100;

  console.log(potential);
}