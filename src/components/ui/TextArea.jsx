export default function TextArea({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-300">
                {title}
            </label>
            <div className="mt-1">
                <textarea
                    {...attributes}
                    rows="3"
                    className="focus:outline-none shadow-sm pl-1 mt-1 block w-full sm:text-sm border text-black border-gray-300 rounded-md"
                ></textarea>
            </div>
            <p className="mt-2 text-sm text-gray-300">
                Brief description for your video
            </p>
        </>
    );
}
