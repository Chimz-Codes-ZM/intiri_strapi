import type { Schema, Attribute } from '@strapi/strapi';

export interface FilesMedia extends Schema.Component {
  collectionName: 'components_files_media';
  info: {
    displayName: 'Media';
    icon: 'cube';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface FilesQuote extends Schema.Component {
  collectionName: 'components_files_quotes';
  info: {
    displayName: 'Quote';
    icon: 'cube';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface FilesRichText extends Schema.Component {
  collectionName: 'components_files_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'cube';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface FilesSeo extends Schema.Component {
  collectionName: 'components_files_seos';
  info: {
    displayName: 'SEO';
    icon: 'cube';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    shareImage: Attribute.Media;
  };
}

export interface FilesSlider extends Schema.Component {
  collectionName: 'components_files_sliders';
  info: {
    displayName: 'Slider';
    icon: 'cube';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'files.media': FilesMedia;
      'files.quote': FilesQuote;
      'files.rich-text': FilesRichText;
      'files.seo': FilesSeo;
      'files.slider': FilesSlider;
    }
  }
}
