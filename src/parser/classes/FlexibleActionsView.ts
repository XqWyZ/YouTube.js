import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import SubscribeButtonView from './SubscribeButtonView.js';

export type ActionRow = {
  actions: ObservedArray<SubscribeButtonView>;
};

export default class FlexibleActionsView extends YTNode {
  static type = 'FlexibleActionsView';

  actions_rows: ActionRow[];
  style: string;

  constructor(data: RawNode) {
    super();
    this.actions_rows = data.actionsRows.map((row: RawNode) => ({
      actions: Parser.parseArray(row.actions, SubscribeButtonView)
    }));
    this.style = data.style;
  }
}