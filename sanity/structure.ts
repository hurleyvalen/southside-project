import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem("appointment").title("Appointments"),
      S.documentTypeListItem("menu").title("Menu"),
      S.documentTypeListItem("schedule").title("Schedule")
    ]);
