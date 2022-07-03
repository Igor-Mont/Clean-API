import { AccountModel } from '../../domain/models/account'

interface LoadAccountByEmailRepository {
  load: (email: string) => Promise<AccountModel>
}

export { LoadAccountByEmailRepository }
