import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media;
  };
}

export interface ElementsVision extends Schema.Component {
  collectionName: 'components_elements_visions';
  info: {
    displayName: 'Vision';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<['YOUTUBE', 'TWITTER', 'DISCORD', 'WEBSITE']>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
    tag: Attribute.String;
    tagIcon: Attribute.Media;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    picture: Attribute.Media & Attribute.Required;
    buttons: Attribute.Component<'links.button-link', true>;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsVisions extends Schema.Component {
  collectionName: 'components_sections_visions';
  info: {
    displayName: 'Visions';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    tag: Attribute.String;
    tagIcon: Attribute.Media;
    vision: Attribute.Component<'elements.vision', true>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.feature': ElementsFeature;
      'elements.vision': ElementsVision;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button-link': LinksButtonLink;
      'links.button': LinksButton;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.lead-form': SectionsLeadForm;
      'sections.visions': SectionsVisions;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video-embed': SharedVideoEmbed;
    }
  }
}
