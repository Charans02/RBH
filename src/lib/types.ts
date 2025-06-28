export type ServiceType = {
  image: string;
  title: string;
  description: string;
  imageHeight?: number;
};

export type TestimonialType = {
  avatar: string;
  name: string;
  content: string;
  rating: number; // 0-5 scale
};

type ExpertType = {
  id: number;
  img_url: string;
  img_name: string;
};

export interface Expert {
  id: number;
  img_group: ExpertType[];
}

export interface ComparisonSet {
  id: number;
  before: string;
  after: string;
  title: string;
}

export interface JunkRemovalType {
  id: number;
  img_url: string;
  img_name: string;
}

export interface Customer {
  id: number;
  avatar_url: string;
  name: string;
}

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => void;
  }
}

declare global {
  interface DataLayerEvent {
    event: string;
    form_name?: string;
    [key: string]: string | number | boolean | undefined;
  }

  interface Window {
    gtagSendEvent?: (url: string) => void;

    gtag?: (
      command: 'config' | 'event' | 'set',
      targetId: string,
      params?: Record<string, unknown>
    ) => void;

    dataLayer: DataLayerEvent[];
  }
}
