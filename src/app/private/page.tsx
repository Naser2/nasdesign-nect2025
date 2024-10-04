import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import ProfileComponent from '@/components/ProfileComponent'
export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  console.log("DATABASE DATA", data)
  return <>  <ProfileComponent user={data}/> </>
  
}
  


{/*  
 //   <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//   <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
//   <div className="mt-4">
//     <p className="text-gray-600"><strong>Name:</strong> {data.user.user_metadata.first_name} {data.user.user_metadata.last_name}</p>
//     <p className="text-gray-600"><strong>Email:</strong> {data.user.email}</p>
//     <p className="text-gray-600"><strong>Plan:</strong> {data.user.user_metadata.phone}</p>
//     <p className="text-gray-600"><strong>Plan:</strong> {data.user.user_metadata.plan}</p>
//   </div>
// </div> */}