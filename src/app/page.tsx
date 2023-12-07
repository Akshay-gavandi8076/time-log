import Calendar from '@/components/Calendar'
import Logs from '@/components/Logs'
import Navbar from '@/components/Navbar'
import { NewLog } from '@/components/NewLog'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return redirect('/auth')
  }
  return (
    <div className='p-5 space-y-10'>
      <Navbar />

      <NewLog />

      <Calendar />

      <Logs />
    </div>
  )
}
