import {Rule} from '@sanity/types'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'category',
      title: 'SDG Category',
      type: 'string',
      options: {
        list: [
          {title: 'Climate Action', value: 'climate-action'},
          {
            title: 'Peace, Justice and Strong Institutions',
            value: 'peace-justice-strong-institutions',
          },
          {title: 'Gender Equality', value: 'gender-equality'},
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
  ],
}
