import { types, Instance, SnapshotIn } from "mobx-state-tree"

import { BaseModel } from "./BaseModel"

export const UserModel = BaseModel.named("User")
  .props({
    name: types.optional(types.string, "unknown")
  })
  .volatile(() => ({
    age: types.number
  }))
  .views(self => ({
    get version() {
      return self.root.system.version
    }
  }))

export interface TUserModel extends Instance<typeof UserModel> {}
export interface TUserModelProps extends SnapshotIn<typeof UserModel> {}
