import { Badge } from '@/components/ui/badge'

export  function StatusPaid() {
  return <div className='flex items-start gap-4 p-3 border rounded-2xl bg-blue-500/20 text-white border-white shadow-lg'>
    <div>
        <h3 className='font-semibold text-2xl mb-2 text-center'>Premium Access</h3>
        <Badge variant='outline' className='w-full bg-blue-600 py-1'> Active</Badge>
        
    </div>
    </div>
}
