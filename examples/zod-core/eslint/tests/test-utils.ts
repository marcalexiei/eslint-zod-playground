import { ESLint } from 'eslint';

const eslint = new ESLint();

export async function lint(filePath: string) {
  const [result] = await eslint.lintFiles([filePath]);

  return result?.messages.map(({ ruleId, line, message }) => ({ ruleId, line, message })) ?? [];
}
