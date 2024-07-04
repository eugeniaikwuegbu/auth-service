export interface AIResponseInterface {
  Conversation_title?: ConversationTitle;
  History?: string;
  Result: string;
  pdf_link?: string;
}

export interface ConversationTitle {
  input: string;
  output: string;
}
