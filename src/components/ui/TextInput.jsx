export default function TextInput({ title, ...attributes }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-300">{title}</label>
      <input
        type="text"
        className="mt-1 block text-lg pl-1 w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 text-gray-600 focus:outline-none"
        {...attributes}
      />
    </>
  );
}
