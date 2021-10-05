export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '615c2f277f5ec2e4f268b472',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vz6suifc',
                  apiId: 'd21abe03-c0fd-450f-8ac2-22bfd123495c'
                },
                {
                  buildHookId: '615c2f2705cf15d502420c8f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-28w5zz6c',
                  apiId: '7dee37ed-c59e-4bc4-9b89-8f6c3a5c8ca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CapperCapper/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-28w5zz6c.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
