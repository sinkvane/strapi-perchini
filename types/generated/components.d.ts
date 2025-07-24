import type { Schema, Struct } from '@strapi/strapi';

export interface SharedHuiu extends Struct.ComponentSchema {
  collectionName: 'components_shared_huius';
  info: {
    displayName: 'Huiu';
    icon: 'arrowDown';
  };
  attributes: {};
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_shared_phone_numbers';
  info: {
    displayName: '\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430';
    icon: 'phone';
  };
  attributes: {
    phones: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.huiu': SharedHuiu;
      'shared.media': SharedMedia;
      'shared.phone-number': SharedPhoneNumber;
      'shared.seo': SharedSeo;
    }
  }
}
