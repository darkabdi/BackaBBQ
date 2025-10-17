import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import { Hero } from './texts'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, Hero],
}
