export default function Unprotected() {
  return (
    <div className="flex justify-center ">
      <h1 className="font-bold mt-20 text-xl dark:text-white rounded-lg">
        This is unprotected page and can be viewed publicly without
        authentication.
      </h1>
    </div>
  );
}
