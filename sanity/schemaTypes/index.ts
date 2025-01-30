import { type SchemaTypeDefinition } from 'sanity'
import { appointment } from './appointment'
import { menu } from './menu'
import { schedule } from './schedule'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [appointment, menu, schedule],
}
