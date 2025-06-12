import React from 'react'

function CommentForm() {
  return (
    <div className="mt-8">
          <h2 className="font-bold mb-2">نوشتن دیدگاه</h2>
          <p className="text-xs text-gray-400 mb-2">
            نشانی ایمیل شما منتشر نخواهد شد.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="نام"
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="دیدگاه"
              className="w-full border rounded p-2 h-24 resize-none"
            ></textarea>
            <button type="submit" className="btn btn--primary btn--outline">
              ارسال دیدگاه
            </button>
          </form>
        </div>
  )
}

export default CommentForm