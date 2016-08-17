export class Message {
  content: string;
  messageId: string;
  username: string;
  userId: string;

  constructor (content: string, messageId?: string, username?: string, userId?: string) {
    this.content = content;
    this.messageId = messageId;
    this.username = username;
    this.userId = userId;
  }
}
