export function log(message: string): void {
  console.info(`[${new Date().toISOString()}]: ${message}`);
}

module.exports = {
  log,
};
