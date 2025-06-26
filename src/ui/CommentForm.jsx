import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("دیدگاه شما با موفقیت ثبت شد");
    reset();
  };

  return (
    <div className="mt-8">
          <h2 className="font-bold mb-2">نوشتن دیدگاه</h2>
          <p className="text-xs text-gray-400 mb-2">
            نشانی ایمیل شما منتشر نخواهد شد.
          </p>
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <input
            {...register("name",{  required: "نام و نام خانوادگی ضروری است", maxLength: 20 })}
           
              type="text"
              placeholder="نام"
              className="w-full border rounded-md p-2"
              
              />
              {errors.name && <span className="text-error block text-sm mt-2 ">{errors.name?.message}</span>}

            <input
              type="text"
              placeholder="ایمیل"
              className="w-full border rounded-md p-2"
              {...register("email",{  required: "ایمیل ضروری است",pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              } })}
              />
              {errors.email && <span className="text-error block text-sm mt-2 ">{errors.email?.message}</span>}
            <textarea
              placeholder="دیدگاه"
              className="w-full border rounded-md p-2 h-24 resize-none"
              {...register("comment",{  required: "دیدگاه ضروری است" })}
              ></textarea>
              {errors.comment && <span className="text-error block text-sm mt-2 ">{errors.comment?.message}</span>}
            <button type="submit" className="btn btn--primary btn--outline">
              ارسال دیدگاه
            </button>
          </form>
        </div>
  )
}

export default CommentForm