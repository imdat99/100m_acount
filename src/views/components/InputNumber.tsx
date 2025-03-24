import React from 'react'

const InputNumber = () => {
  return (
    <div className="py-2 px-3 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700">
  <div className="w-full flex justify-between items-center gap-x-3" data-hs-input-number="">
    <div className="flex-1">
      <span className="block text-xs text-gray-500 dark:text-neutral-400">
        Select quantity
      </span>
      <input className="w-full !focus-visible:border-0 focus:border-0 active:border-0 p-0 bg-transparent border-0 text-gray-800 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white" style={{
        MozAppearance: 'textfield',
        WebkitAppearance: 'none',
        appearance: 'none'
      }} type="text" aria-roledescription="Number field" value="1" data-hs-input-number-input=""/>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
      <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" tabIndex={1} aria-label="Decrease" data-hs-input-number-decrement="">
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </button>
      <button type="button" className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" tabIndex={1} aria-label="Increase" data-hs-input-number-increment="">
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
  )
}

export default InputNumber