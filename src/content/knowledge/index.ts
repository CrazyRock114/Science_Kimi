import type { KnowledgePoint, Subject } from '../types';
import { phyMotion001 } from './phy-motion-001';
import { chemPh001 } from './chem-ph-001';
import { chemAtomic001 } from './chem-atomic-001';
import { chemAtomic002 } from './chem-atomic-002';
import { chemAtomic003 } from './chem-atomic-003';
import { chemAtomic004 } from './chem-atomic-004';
import { chemBonding001 } from './chem-bonding-001';
import { chemBonding002 } from './chem-bonding-002';
import { chemBonding003 } from './chem-bonding-003';
import { chemBonding004 } from './chem-bonding-004';
import { chemStoich001 } from './chem-stoich-001';
import { chemStoich002 } from './chem-stoich-002';
import { chemStoich003 } from './chem-stoich-003';
import { chemStoich004 } from './chem-stoich-004';
import { chemAcidbase001 } from './chem-acidbase-001';
import { chemAcidbase002 } from './chem-acidbase-002';
import { chemAcidbase003 } from './chem-acidbase-003';
import { chemAcidbase004 } from './chem-acidbase-004';
import { chemEnergetics001 } from './chem-energetics-001';
import { chemEnergetics002 } from './chem-energetics-002';
import { chemEnergetics003 } from './chem-energetics-003';
import { chemEnergetics004 } from './chem-energetics-004';
import { chemMetal001 } from './chem-metal-001';
import { chemMetal002 } from './chem-metal-002';
import { chemGas001 } from './chem-gas-001';
import { chemGas002 } from './chem-gas-002';
import { phyKinematicsVelocity } from './phy-kinematics-velocity';
import { phyKinematicsFreefall } from './phy-kinematics-freefall';
import { phyKinematicsProjectile } from './phy-kinematics-projectile';
import { phyKinematicsReferenceFrame } from './phy-kinematics-reference-frame';
import { phyForce001 } from './phy-force-001';
import { phyForce002 } from './phy-force-002';
import { phyForce003 } from './phy-force-003';
import { phyForce004 } from './phy-force-004';
import { phyPressure001 } from './phy-pressure-001';
import { phyPressure002 } from './phy-pressure-002';
import { phyPressure003 } from './phy-pressure-003';
import { phyPressure004 } from './phy-pressure-004';
import { phyMachine001 } from './phy-machine-001';
import { phyMachine002 } from './phy-machine-002';
import { phyMachine003 } from './phy-machine-003';
import { phyMachine004 } from './phy-machine-004';
import { phyElectric001 } from './phy-electric-001';
import { phyElectric002 } from './phy-electric-002';
import { phyElectric003 } from './phy-electric-003';
import { phyElectric004 } from './phy-electric-004';
import { phyOptics001 } from './phy-optics-001';
import { phyOptics002 } from './phy-optics-002';
import { phyThermal001 } from './phy-thermal-001';
import { phyThermal002 } from './phy-thermal-002';
import { bioCell001 } from './bio-cell-001';
import { bioCell002 } from './bio-cell-002';
import { bioCell003 } from './bio-cell-003';
import { bioCell004 } from './bio-cell-004';
import { bioGenetics001 } from './bio-genetics-001';
import { bioGenetics002 } from './bio-genetics-002';
import { bioGenetics003 } from './bio-genetics-003';
import { bioGenetics004 } from './bio-genetics-004';
import { bioPlant001 } from './bio-plant-001';
import { bioPlant002 } from './bio-plant-002';
import { bioPlant003 } from './bio-plant-003';
import { bioPlant004 } from './bio-plant-004';
import { bioHuman001 } from './bio-human-001';
import { bioHuman002 } from './bio-human-002';
import { bioHuman003 } from './bio-human-003';
import { bioHuman004 } from './bio-human-004';
import { bioEco001 } from './bio-eco-001';
import { bioEco002 } from './bio-eco-002';
import { bioEco003 } from './bio-eco-003';
import { bioEco004 } from './bio-eco-004';

/** 全部知识点（按加入顺序） */
export const knowledgePoints: KnowledgePoint[] = [
  phyMotion001,
  chemPh001,
  chemAtomic001,
  chemAtomic002,
  chemAtomic003,
  chemAtomic004,
  chemBonding001,
  chemBonding002,
  chemBonding003,
  chemBonding004,
  chemStoich001,
  chemStoich002,
  chemStoich003,
  chemStoich004,
  chemAcidbase001,
  chemAcidbase002,
  chemAcidbase003,
  chemAcidbase004,
  chemEnergetics001,
  chemEnergetics002,
  chemEnergetics003,
  chemEnergetics004,
  chemMetal001,
  chemMetal002,
  chemGas001,
  chemGas002,
  phyKinematicsVelocity,
  phyKinematicsFreefall,
  phyKinematicsProjectile,
  phyKinematicsReferenceFrame,
  phyForce001,
  phyForce002,
  phyForce003,
  phyForce004,
  phyPressure001,
  phyPressure002,
  phyPressure003,
  phyPressure004,
  phyMachine001,
  phyMachine002,
  phyMachine003,
  phyMachine004,
  phyElectric001,
  phyElectric002,
  phyElectric003,
  phyElectric004,
  phyOptics001,
  phyOptics002,
  phyThermal001,
  phyThermal002,
  bioCell001,
  bioCell002,
  bioCell003,
  bioCell004,
  bioGenetics001,
  bioGenetics002,
  bioGenetics003,
  bioGenetics004,
  bioPlant001,
  bioPlant002,
  bioPlant003,
  bioPlant004,
  bioHuman001,
  bioHuman002,
  bioHuman003,
  bioHuman004,
  bioEco001,
  bioEco002,
  bioEco003,
  bioEco004,
];

export function getKnowledgePointsBySubject(subject: Subject): KnowledgePoint[] {
  return knowledgePoints.filter((kp) => kp.subject === subject);
}

export function getKnowledgePoint(subject: Subject, id: string): KnowledgePoint | undefined {
  return knowledgePoints.find((kp) => kp.subject === subject && kp.id === id);
}
