export default {
  name: 'news',
  title: 'اخبار',
  type: 'document',
  fields: [
    {name: 'title', title: 'عنوان خبر', type: 'string'},
    {name: 'image', title: 'تصویر خبر', type: 'image', options: {hotspot: true}},
    {name: 'shortDesc', title: 'خلاصه خبر', type: 'text'},
    {name: 'description', title: 'متن کامل خبر', type: 'text'},
    {name: 'date', title: 'تاریخ انتشار', type: 'string'},
    {name: 'tags', title: 'برچسب‌ها', type: 'array', of: [{type: 'string'}]},
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
  ],
}
