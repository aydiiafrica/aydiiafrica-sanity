export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
        name: 'specificity',
        title: 'Specificity',
        type: 'number',
        options: {
          list: [
            { title: '1 (Gold)', value: 1 },
            { title: '2 (Silver)', value: 2 },
            { title: '3 (Bronze)', value: 3 },
            { title: 'Others', value:4 },
          ],
        },
        description: 'Assign a unique importance level from 1 (Gold) to 3 (Bronze)',
        validation: (Rule: any) => Rule.required(),
        initialValue: 4
      },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
}
