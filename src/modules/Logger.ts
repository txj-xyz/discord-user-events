export type LogData = {
  message?: string;
  webhook?: string;
};

export const logger = {
  log: (data: LogData | string) => console.log("[INFO]", data),
  error: (data: LogData | string) => console.error("[ERROR]", data),
};
