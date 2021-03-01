import { palette, strings } from '../../config';
import Cam from '../../assets/images/cam.svg';
import Covid from '../../assets/images/covid.svg';
import Office from '../../assets/images/office.svg';

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
