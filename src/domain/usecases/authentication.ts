interface AuthenticationModel {
  email: string
  password: string
}

interface Authentication {
  auth: (authentication: AuthenticationModel) => Promise<string>
}

export { Authentication, AuthenticationModel }
