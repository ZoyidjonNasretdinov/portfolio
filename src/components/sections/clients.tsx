import React from 'react'
import { HiClipboardDocumentList } from 'react-icons/hi2'

const Clients = () => {
  return (
    <section className="bg-primary rounded-[17px] w-[400px] overflow-hidden relative shadow-lg">
      <div className="px-6 py-4">
        <h2 className="flex items-center justify-center gap-1 text-white mb-2">
          <HiClipboardDocumentList size={25} className="text-textSecondary" /> My Clients
        </h2>
        <p className="text-xl text-white flex justify-center mb-4">Satisfied Partners</p>
      </div>
    </section>
  )
}

export default Clients
