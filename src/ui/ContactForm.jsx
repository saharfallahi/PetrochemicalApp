import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("فرم تماس شما با موفقیت ثبت شد");
    reset();
  };

  return (
    <form
      className="bg-secondary-0 rounded-md border border-secondary-100 shadow-md p-6 flex flex-col h-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-xl mb-4 text-right">
        برای دریافت مشاوره با ما در تماس باشید
      </h2>
      <div className="mb-3">
        <input
          {...register("name", {
            required: "نام و نام خانوادگی ضروری است",
            maxLength: 20,
          })}
          type="text"
          placeholder="نام و نام خانوادگی :"
          className="w-full textField__input"
        />
        {errors.name && (
          <span className="text-error block text-sm mt-2 ">
            {errors.name?.message}
          </span>
        )}
      </div>
      <div className="mb-3 flex gap-x-2">
        <div className="w-1/2 flex flex-col ">
          <input
            {...register("email", {
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            })}
            type="email"
            placeholder="ایمیل :"
            className="w-full textField__input"
          />
          {errors.email && (
            <span className="text-error block text-sm mt-2 ">
              {errors.email?.message}
            </span>
          )}
        </div>

        <div className="w-1/2 flex flex-col ">
          <input
            {...register("number", {
              required: "شماره تماس ضروری است",
              maxLength: 11,
            })}
            type="text"
            placeholder="شماره تماس :"
            className="w-full textField__input"
          />
          {errors.number && (
            <span className="text-error block text-sm mt-2 ">
              {errors.number?.message}
            </span>
          )}
        </div>
      </div>
      <div className="mb-3">
        <textarea
          {...register("comment", { required: "متن پیام ضروری است" })}
          placeholder="متن پیام"
          className="w-full textField__input h-24 resize-none"
        />
        {errors.comment && (
          <span className="text-error block text-sm mt-2 ">
            {errors.comment?.message}
          </span>
        )}
      </div>
      <div>
        <button type="submit" className="btn btn--primary btn--outline ">
          ارسال پیام
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
