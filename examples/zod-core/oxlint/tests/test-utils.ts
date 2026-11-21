import { spawnSync } from 'node:child_process';

interface Diagnostic {
  filename: string;
  message: string;
  code: string;
  severity: string;
}

export function runOxlint(filePath: string) {
  const { status, stdout } = spawnSync('pnpm', ['oxlint', '--format=json', filePath], {
    encoding: 'utf8',
  });
  const { diagnostics } = JSON.parse(stdout) as { diagnostics: Array<Diagnostic> };

  return {
    code: status,
    diagnostics: diagnostics.map(({ filename, message, code, severity }) => ({
      filename,
      message,
      code,
      severity,
    })),
  };
}
