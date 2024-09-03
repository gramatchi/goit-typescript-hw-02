export interface Photos {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    alt: string;
}

export interface Modal {
    url: string;
    alt: string;
  };