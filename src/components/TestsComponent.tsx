export function TestComponent() {
  return (
    <>
      <div>
        <p className='text-4xl font-bold mb-5'>Test Component</p>

        <input
          id='firstName'
          maxLength={30}
          type='text'
          className='w-full bg-zinc-50 leading-5 py-2 px-3 border-green-300 hover:border-green-200 focus:border-indigo-300 shadow-sm rounded placeholder-slate-400'
        />

        <input type="checkbox" name="" className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none' id="" />

        <button type="button" className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Click me</button>
      </div>
    </>
  );
}
