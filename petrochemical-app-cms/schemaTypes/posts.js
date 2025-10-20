export default {
  name: 'post',
  title: 'پست‌ها',
  type: 'document',
  fields: [
    {name: 'title', title: 'عنوان پست', type: 'string'},
    {name: 'image', title: 'تصویر شاخص', type: 'image', options: {hotspot: true}},
    {name: 'shortDesc', title: 'توضیح کوتاه', type: 'text'},
    {name: 'description', title: 'محتوای کامل (HTML)', type: 'text'},
    {name: 'date', title: 'تاریخ', type: 'string'},
    {name: 'tags', title: 'برچسب‌ها', type: 'array', of: [{type: 'string'}]},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
  ],
}
