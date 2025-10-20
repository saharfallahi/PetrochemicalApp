import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'st5nhcpl', // از داشبورد Sanity بردار
  dataset: 'production',        // اگر نام دیگری نساختی
  apiVersion: '2025-10-19',     // تاریخ امروز
  useCdn: true,                 // برای خواندن داده‌ها از CDN سریع‌تره
})