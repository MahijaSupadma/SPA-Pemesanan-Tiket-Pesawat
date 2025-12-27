export function Table_Jadwal_Penerbangan(){
    return <div className="flex flex-col ml-10">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">NO Penerbangan</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Maskapai</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Departure</th>
                           <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Gate</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Arrival</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">0512</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Garuda</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">19.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">C2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">21.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">0513</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Lion Air</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">08.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">A2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">10.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">0514</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Batik Air</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">10.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">B2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">12.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">0544</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Batik Air</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">21.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">A1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">23.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>

            <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">0555</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">Lion Air</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">15.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">C2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">17.00</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
}