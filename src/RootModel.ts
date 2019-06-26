import { types, Instance, SnapshotIn } from 'mobx-state-tree'

import { UserModel } from './UserModel'
import { SystemModel } from './SystemModel'

export const RootModel = types.model('root', {
  system: types.optional(SystemModel, {}),
  user: types.optional(UserModel, {})
})

export interface TRootModel extends Instance<typeof RootModel> {}
export interface TRootModelProps extends SnapshotIn<typeof RootModel> {}
