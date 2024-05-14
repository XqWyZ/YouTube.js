import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class SubscribeButtonView extends YTNode {
  static type = 'SubscribeButtonView';

  subscribe_button_content: {
    button_text: string,
    accessibility_text: string,
    image_name: string,
    subscribe_state: {
      key: string,
      subscribed: boolean
    },
    on_tap_command: NavigationEndpoint
  };
  unsubscribe_button_content: {
    button_text: string,
    accessibility_text: string,
    image_name: string,
    subscribe_state: {
      key: string,
      subscribed: boolean
    },
    on_tap_command: NavigationEndpoint
  };
  state_entity_store_key: string;
  disable_notification_bell: boolean;
  button_style: {
    unsubscribed_state_style: string,
    subscribed_state_style: string,
    button_size: string
  };
  background_style: string;
  disable_subscribe_button: boolean;
  on_show_subscription_options: {
    innertube_command: NavigationEndpoint
  };
  channel_id: string;
  notification_state_entity_store_keys: {
    subs_notification_state_key: string
  };
  bell_accessibility_data: {
    off_label: string,
    all_label: string,
    occasional_label: string,
    disabled_label: string
  };
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    },
    enable_displaylogger_experiment: boolean
  };

  constructor(data: RawNode) {
    super();
    this.subscribe_button_content = {
      button_text: data.subscribeButtonContent.buttonText,
      accessibility_text: data.subscribeButtonContent.accessibilityText,
      image_name: data.subscribeButtonContent.imageName,
      subscribe_state: {
        key: data.subscribeButtonContent.subscribeState.key,
        subscribed: data.subscribeButtonContent.subscribeState.subscribed
      },
      on_tap_command: new NavigationEndpoint(data.subscribeButtonContent.onTapCommand)
    };
    this.unsubscribe_button_content = {
      button_text: data.unsubscribeButtonContent.buttonText,
      accessibility_text: data.unsubscribeButtonContent.accessibilityText,
      image_name: data.unsubscribeButtonContent.imageName,
      subscribe_state: {
        key: data.unsubscribeButtonContent.subscribeState.key,
        subscribed: data.unsubscribeButtonContent.subscribeState.subscribed
      },
      on_tap_command: new NavigationEndpoint(data.unsubscribeButtonContent.onTapCommand)
    };
    this.state_entity_store_key = data.stateEntityStoreKey;
    this.disable_notification_bell = data.disableNotificationBell;
    this.button_style = {
      unsubscribed_state_style: data.buttonStyle.unsubscribedStateStyle,
      subscribed_state_style: data.buttonStyle.subscribedStateStyle,
      button_size: data.buttonStyle.buttonSize
    };
    this.background_style = data.backgroundStyle;
    this.disable_subscribe_button = data.disableSubscribeButton;
    this.on_show_subscription_options = {
      innertube_command: new NavigationEndpoint(data.onShowSubscriptionOptions.innertubeCommand)
    };
    this.channel_id = data.channelId;
    this.notification_state_entity_store_keys = {
      subs_notification_state_key: data.notificationStateEntityStoreKeys.subsNotificationStateKey
    };
    this.bell_accessibility_data = {
      off_label: data.bellAccessibilityData.offLabel,
      all_label: data.bellAccessibilityData.allLabel,
      occasional_label: data.bellAccessibilityData.occasionalLabel,
      disabled_label: data.bellAccessibilityData.disabledLabel
    };
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      },
      enable_displaylogger_experiment: data.loggingDirectives.enableDisplayloggerExperiment
    };
  }
}
