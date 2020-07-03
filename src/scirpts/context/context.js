import React from 'react'

const {
  Provider: CategoriesProvider,
  Consumer: CategoriesConsumer
} = React.createContext();

const {
  Provider: ProductsProvider,
  Consumer: ProductsConsumer
} = React.createContext();

export {
  CategoriesProvider,
  CategoriesConsumer,
  ProductsProvider,
  ProductsConsumer,
}