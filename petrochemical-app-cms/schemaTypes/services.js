export default {
  name: 'service',
  title: 'خدمات',
  type: 'document',
  fields: [
    {name: 'title', title: 'عنوان خدمت', type: 'string'},
    {name: 'image', title: 'تصویر خدمت', type: 'image', options: {hotspot: true}},
    {name: 'shortDesc', title: 'توضیح کوتاه', type: 'text'},
    {name: 'description', title: 'توضیح کامل (HTML)', type: 'text'},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
  ],
}
