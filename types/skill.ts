import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategories {
  [key: string]: Skill[];
}
