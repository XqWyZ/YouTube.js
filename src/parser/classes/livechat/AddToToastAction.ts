import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AddToToastAction extends YTNode {
  static type = 'AddToToastAction';

  item: YTNode;

  constructor(data: RawNode) {
    super();
    this.item = Parser.parseItem(data.item);
  }
}
