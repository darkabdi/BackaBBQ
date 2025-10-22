import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import { hero } from './texts'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, hero],
}
