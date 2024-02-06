import { useReadContract } from 'wagmi'
import { blockmakerTokenABI } from '../contracts/ABIs'
import { Title } from './ui'

export default function Owner() {
  const { data } = useReadContract({
    abi: blockmakerTokenABI,
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    functionName: 'owner'
  })

  return (
    <di className="bg-white p-4 border shadow rounded-md">
      <Title>Owner</Title>
      <p className="bg-gray-100 text-zinc-600 p-2 rounded-md text-sm">{data}</p>
    </di>
  )
}