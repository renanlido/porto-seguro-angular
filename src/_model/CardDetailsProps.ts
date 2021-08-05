export type CardDetailsProps = {
  text: string;
  adress: {
    street: string;
    neighborhood: string;
    state: string;
    uf: string;
    cep: string;
  };
  phone?: {
    ddd: string;
    number: string;
  };
};
