import { SimpleSchema } from "meteor/aldeed:simple-schema";
import { registerSchema } from "@reactioncommerce/reaction-collections";
import { PackageConfig } from "./registry";

/**
 * @name SocialProvider
 * @memberof schemas
 * @type {SimpleSchema}
 * @property {String} profilePage optional, Profile Page
 * @property {Boolean} enabled optional, default value: `false`
 */
export const SocialProvider = new SimpleSchema({
  profilePage: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    label: "Profile Page",
    optional: true
  },
  enabled: {
    type: Boolean,
    label: "Enabled",
    defaultValue: false,
    optional: true
  }
});

registerSchema("SocialProvider", SocialProvider);

/**
 * @name SocialPackageConfig
 * @memberof schemas
 * @type {SimpleSchema}
 * @extends {PackageConfig}
 * @property {Object} settings.public optional
 * @property {Object} settings.public.apps optional
 * @property {SocialProvider} settings.public.apps.facebook  optional, Facebook
 * @property {String} settings.public.apps.facebook.appId optional, Facebook App ID
 * @property {String} settings.public.apps.facebook.appSecret optional, Facebook App Secret
 * @property {SocialProvider} settings.public.apps.twitter optional, Twitter
 * @property {String} settings.public.apps.twitter.username optional, Twitter username
 * @property {SocialProvider} settings.public.apps.pinterest optional, Pinterest
 * @property {SocialProvider} settings.public.apps.googleplus optional, Google+
 */
export const SocialPackageConfig = new SimpleSchema([
  PackageConfig, {
    "settings.public": {
      type: Object,
      optional: true
    },
    "settings.public.apps": {
      type: Object,
      label: "Social Settings",
      optional: true
    },
    "settings.public.apps.facebook": {
      type: SocialProvider,
      optional: true
    },
    "settings.public.apps.facebook.appId": {
      type: String,
      regEx: /\d+/,
      label: "App Id",
      optional: true
    },
    "settings.public.apps.facebook.appSecret": {
      type: String,
      regEx: /[\da-z]+/,
      label: "App Secret",
      optional: true
    },
    "settings.public.apps.twitter": {
      type: SocialProvider,
      optional: true
    },
    "settings.public.apps.twitter.username": {
      type: String,
      label: "Username",
      optional: true
    },
    "settings.public.apps.pinterest": {
      type: SocialProvider,
      optional: true
    },
    "settings.public.apps.googleplus": {
      type: SocialProvider,
      label: "Google+",
      optional: true
    }
  }
]);

registerSchema("SocialPackageConfig", SocialPackageConfig);
