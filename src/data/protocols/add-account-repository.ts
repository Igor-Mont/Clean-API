import { AccountModel, AddAccountModel } from '../usecases/add-account/db-add-account-protocols'

interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}

export { AddAccountRepository }
