import { CardDetailsProps } from './CardDetailsProps';

export type CardTypeProps = {
  id: string;
  title?: string;
  imageName: string;
  details?: CardDetailsProps;
  cardProps?: {
    imageHeight?: string;
    imageWidth?: string;
    cardMaxWidth?: string;
  };
};
