'use client'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Home() {
  const { address, isConnected, chain } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Web3 Waitlist Demo (BSC Testnet)</h1>
      
      {isConnected ? (
        <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg border border-gray-700">
          <p className="text-green-400 font-bold mb-2">Connected Successfully!</p>
          <p className="mb-2 text-sm text-gray-300">Wallet: {address}</p>
          <p className="mb-6 text-sm text-gray-300">Network: {chain?.name} (ID: {chain?.id})</p>
          <button 
            onClick={() => disconnect()}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-bold transition w-full"
          >
            Disconnect Wallet
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p className="text-gray-400 mb-4 text-center">Please connect your Web3 wallet to continue.</p>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-bold transition"
            >
              Connect with {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}