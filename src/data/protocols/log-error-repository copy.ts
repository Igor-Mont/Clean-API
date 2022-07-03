interface LogErrorRepository {
  log: (stack: string) => Promise<void>
}

export { LogErrorRepository }
