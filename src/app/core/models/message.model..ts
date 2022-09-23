import { HTTP_RESPONSE_MESSAGE } from '../enums/http-response.enum';
import { MessageTypes } from '../enums/message.enum';

export class Message {
    constructor(public content: HTTP_RESPONSE_MESSAGE, public type: MessageTypes) {}
}
