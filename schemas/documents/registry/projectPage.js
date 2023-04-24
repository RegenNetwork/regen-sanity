export default {
  name: 'projectPage',
  type: 'document',
  title: 'Project Page',
  fields: [
    {
      name: 'gettingStartedResourcesSection',
      description: 'This content will appear on all project pages',
      type: 'reference',
      to: [{ type: 'gettingStartedResourcesSection' }],
      title: 'Resources for Getting Started Section',
      validation: Rule => Rule.required(),
    },
  ],
};
