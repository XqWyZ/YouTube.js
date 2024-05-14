import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import type { RawNode } from '../../index.js';

export default class NotificationText extends YTNode {
  static type = 'NotificationText';

  success_response_text: Text;

  constructor(data: RawNode) {
    super();
    this.success_response_text = new Text(data.successResponseText);
  }
}
