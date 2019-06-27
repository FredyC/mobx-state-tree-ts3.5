import { getRoot, types } from "mobx-state-tree"

import { TRootModel } from "./RootModel"

export const BaseModel = types.model().views(self => ({
  get root(): TRootModel {
    return getRoot<TRootModel>(self)
  }
}))
