export default {
  name: 'sdg',
  title: 'SDG',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main SDG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'object',
      fields: [
        {
          name: 'border',
          title: 'Border Color',
          type: 'string',
          options: {
            list: [
              {title: 'Green', value: 'border-green-500'},
              {title: 'Blue', value: 'border-blue-500'},
              {title: 'Red', value: 'border-red-500'},
            ],
          },
        },
        {
          name: 'heading',
          title: 'Heading Color',
          type: 'string',
          options: {
            list: [
              {title: 'Green', value: 'text-green-900'},
              {title: 'Blue', value: 'text-blue-900'},
              {title: 'Red', value: 'text-red-900'},
            ],
          },
        },
      ],
    },
  ],
}
