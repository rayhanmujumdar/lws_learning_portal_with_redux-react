export default function TextInput({ title, ...attributes }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-300">{title}</label>
      <input
        type="text"
        className="mt-1 focus:ring-indigo-500 placeholder:text-black focus:border-indigo-500 block text-lg pl-1 text-black w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2"
        {...attributes}
      />
    </>
  );
}
