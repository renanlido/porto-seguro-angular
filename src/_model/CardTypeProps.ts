import { CardDetailsProps } from './CardDetailsProps';

export type CardTypeProps = {
  id: string | number;
  title?: string;
  imageSrc: string;
  details?: CardDetailsProps;
  cardProps?: {
    imageHeight?: string;
    imageWidth?: string;
    cardMaxWidth?: string;
  };
};
