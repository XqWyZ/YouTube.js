import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';

export default class ClientSideToggleMenuItem extends YTNode {
  static type = 'ClientSideToggleMenuItem';

  default_text: Text;
  default_icon: {
    icon_type: string
  };
  toggled_text: Text;
  toggled_icon: {
    icon_type: string
  };
  menu_item_identifier: string;
  command: {
    click_tracking_params: string,
    toggle_live_reactions_mute_command?: NavigationEndpoint,
    toggle_live_chat_timestamps_endpoint?: NavigationEndpoint
  };
  is_toggled?: boolean;
  logging_directives?: {
    tracking_params: string,
    visibility: {
      types: string
    },
    enable_displaylogger_experiment: boolean
  };

  constructor(data: RawNode) {
    super();
    this.default_text = new Text(data.defaultText);
    this.default_icon = {
      icon_type: data.defaultIcon.iconType
    };
    this.toggled_text = new Text(data.toggledText);
    this.toggled_icon = {
      icon_type: data.toggledIcon.iconType
    };
    this.menu_item_identifier = data.menuItemIdentifier;
    this.command = {
      click_tracking_params: data.command.clickTrackingParams,
      toggle_live_reactions_mute_command: Reflect.has(data.command, 'toggleLiveReactionsMuteCommand') ? new NavigationEndpoint(data.command.toggleLiveReactionsMuteCommand) : undefined,
      toggle_live_chat_timestamps_endpoint: Reflect.has(data.command, 'toggleLiveChatTimestampsEndpoint') ? new NavigationEndpoint(data.command.toggleLiveChatTimestampsEndpoint) : undefined
    };
    this.is_toggled = Reflect.has(data, 'isToggled') ? data.isToggled : undefined;
    this.logging_directives = Reflect.has(data, 'loggingDirectives') ? {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      },
      enable_displaylogger_experiment: data.loggingDirectives.enableDisplayloggerExperiment
    } : undefined;
  }
}
