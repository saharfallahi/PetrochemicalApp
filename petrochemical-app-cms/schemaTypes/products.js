export default {
  name: 'product',
  title: 'محصولات',
  type: 'document',
  fields: [
    { name: 'title', title: 'نام محصول', type: 'string' },
    { name: 'image', title: 'تصویر محصول', type: 'image', options: { hotspot: true } },
    { name: 'shortDesc', title: 'توضیح کوتاه', type: 'text' },
    { name: 'description', title: 'توضیحات کامل (HTML)', type: 'text' },
    { name: 'icon', title: 'آیکن', type: 'image',options: { hotspot: true } },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
  ],
}

