export default {
  name: 'project',
  title: 'Project',
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
      title: 'Main image',
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
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'imageMediaItem',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'videoGallery',
      title: 'Video Gallery',
      type: 'array',
      of: [
        {
          name: 'videoMediaItem',
          title: 'Video Media Item',
          type: 'object',
          fields: [
            {
              name: 'videoFile',
              title: 'Video File',
              type: 'file',
              options: {
                accept: 'video/*',
              },
            },
            {
              name: 'thumbnail',
              title: 'Thumbnail Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'videoFile.asset.originalFilename',
          media: 'thumbnail',
        },
        prepare(selection: {title?: string; media?: any}) {
          const {title, media} = selection
          return {
            title: title || 'Video File',
            media: media || undefined,
          }
        },
      },
    },
    {
      name: 'documentGallery',
      title: 'Documents Gallery',
      type: 'array',
      of: [
        {
          name: 'documentMediaItem',
          title: 'Document Media Item',
          type: 'object',
          fields: [
            {
              name: 'documentName',
              title: 'Document File Name',
              type: 'string',
            },
            {
              name: 'documentFile',
              title: 'Document File',
              type: 'file',
              options: {
                accept: '.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt',
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'documentFile.asset.originalFilename',
        },
        prepare(selection: {title?: string}) {
          return {
            title: selection.title || 'Document File',
          }
        },
      },
    },
    {
      name: 'sdgs',
      title: 'SDGs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sdg'}],
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
}
