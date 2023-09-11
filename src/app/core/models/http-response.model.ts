import { Message } from '@models/message.model.';

export class HttpResponseBody {
    constructor(public data: string | number | boolean | object | Date | null, public messageResponseList: Message[]) {}
}
