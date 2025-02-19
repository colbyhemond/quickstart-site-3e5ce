// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Settings')
            .icon(() => '⚙️')
            .child(
              S.editor()
                .id('settings')
                .schemaType('settings')
                .documentId('settings')
                .title('Settings')
            ),
          S.divider(),
          S.listItem()
            .title('Home Page')
            .icon(() => '🏠')
            .child(
              S.editor()
                .id('homePage')
                .schemaType('homePage')
                .documentId('homePage')
                .title('Home Page')
          ),
          S.listItem()
            .title('About Page')
            .icon(() => '👤')
            .child(
              S.editor()
                .id('aboutPage')
                .schemaType('aboutPage')
                .documentId('aboutPage')
                .title('About Page')
          ),
          S.documentTypeListItem("post").title("Posts"),
        ])