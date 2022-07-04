import { AccountModel } from '../../../domain/models/account'

interface LoadAccountByEmailRepository {
  loadByEmail: (email: string) => Promise<AccountModel>
}

export { LoadAccountByEmailRepository }
