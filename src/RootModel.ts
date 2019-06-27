import { types, Instance, SnapshotIn } from "mobx-state-tree"

import { UserModel } from "./UserModel"
import { SystemModel } from "./SystemModel"

export const RootModel = types
  .model("Root")
  .props({
    system: types.optional(SystemModel, {}),
    user: types.optional(UserModel, {})
  })
  .views(self => ({
    get agedVersion() {
      return `${self.system.version} - ${self.user.age}`
    }
  }))

export interface TRootModel extends Instance<typeof RootModel> {}
export interface TRootModelProps extends SnapshotIn<typeof RootModel> {}
