import { EHttpResponseMessage } from '@enums/http-response.enum';
import { TMessageType } from '@enums/message.enum';

export class Message {
    constructor(public content: EHttpResponseMessage, public type: TMessageType) {}
}
