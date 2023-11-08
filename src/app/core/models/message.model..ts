import { EHttpResponseMessage } from 'src/app/core/enum/http-response.enum';
import { TMessageType } from 'src/app/core/enum/message.enum';

export class Message {
    constructor(public content: EHttpResponseMessage, public type: TMessageType) {}
}
