import { palette, strings } from '../../config';
import Cam from '../../assets/images/cam.svg';
import Covid from '../../assets/images/covid.svg';
import Office from '../../assets/images/office.svg';
import { City } from './Home.types';

export const categoriesMocked = [
  {
    title: strings.DOCTORS_OFFICE,
    Icon: Office,
  },
  {
    title: strings.ONLINE,
    Icon: Cam,
    disabled: true,
  },
  {
    title: strings.COVID_TESTS,
    Icon: Covid,
    disabled: true,
  },
];

export const CitiesMocked: City[] = [
  {
    text: 'Gliwice',
  },
  {
    text: 'Warszawa',
  },
  {
    text: 'Świnoujście',
  },
  {
    text: 'Polkowice',
  },
  {
    text: 'Radom',
  },
  {
    text: 'Białystok',
  },
  {
    text: 'Kielce',
  },
  {
    text: 'Grunwald',
  },
  {
    text: 'Bydgoszcz',
  },
  {
    text: 'Piła',
  },
];
