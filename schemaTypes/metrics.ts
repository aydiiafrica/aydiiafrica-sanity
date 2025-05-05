export default {
  name: 'metrics',
  title: 'Metrics',
  type: 'document',
  fields: [
    {
      name: 'projectsCompleted',
      title: 'Projects Completed',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'peopleImpacted',
      title: 'People Impacted',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'communitiesReached',
      title: 'Communities Reached',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Impact Metrics',
      }
    },
  },
}
