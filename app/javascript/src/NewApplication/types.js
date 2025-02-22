// @flow

export type ServicePlan = {
  id: number,
  name: string
}

export type ApplicationPlan = {
  id: number,
  name: string,
}

export type Product = {
  id: number,
  name: string,
  systemName: string,
  updatedAt: string,
  appPlans: ApplicationPlan[],
  servicePlans: ServicePlan[],
  defaultAppPlan: ApplicationPlan | null,
  defaultServicePlan: ServicePlan | null
}

export type ContractedProduct = {
  id: number,
  name: string,
  withPlan: ServicePlan
}

export type Buyer = {
  id: number,
  name: string,
  admin: string,
  createdAt: string,
  contractedProducts: ContractedProduct[],
  createApplicationPath: string,
  multipleAppsAllowed?: boolean
}
