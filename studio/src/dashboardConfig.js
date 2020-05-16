export default {
  widgets: [
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
                  buildHookId: '5ebfd8171234051dd702d281',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wfyp527u',
                  apiId: 'f1983c25-0fc7-4fdd-9854-b55c455b73b8'
                },
                {
                  buildHookId: '5ebfd8175ae70a44e1859b21',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tqg4z72e',
                  apiId: '15ced217-2355-4ea5-9b5d-d92a09f7170b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trangdtt712/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tqg4z72e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
