interface Validation {
  validate: (input: any) => Error | null
}

export { Validation }
