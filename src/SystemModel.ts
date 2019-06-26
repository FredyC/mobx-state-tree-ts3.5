import { types, Instance, SnapshotIn } from 'mobx-state-tree'

import { BaseModel } from './BaseModel'

export const SystemModel = BaseModel.named('System').props({
  version: types.frozen('1')
})

export interface TSystemModel extends Instance<typeof SystemModel> {}
export interface TSystemModelProps extends SnapshotIn<typeof SystemModel> {}
