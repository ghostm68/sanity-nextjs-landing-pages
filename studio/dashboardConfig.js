export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6214dfc9322046951042d51c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8boukzzs',
                  apiId: '871ed35c-d550-4312-bd9c-9c1f1c54609d'
                },
                {
                  buildHookId: '6214dfcae3ab0fca0c5a9b07',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9nfvsbe1',
                  apiId: 'b911bdd5-a9a8-4c76-9a26-b5d1ab5ffe43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ghostm68/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9nfvsbe1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
