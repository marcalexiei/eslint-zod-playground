import type { Linter } from 'eslint';

interface MessageForSnapshot {
  ruleId: string | null;
  line: number;
  message: string;
}
export function mapEslintMessagesForSnapshot(
  messages: Array<Linter.LintMessage> | undefined,
): Array<MessageForSnapshot> {
  if (!Array.isArray(messages)) return [];
  return messages.map((m) => ({
    ruleId: m.ruleId,
    line: m.line,
    message: m.message,
  }));
}
