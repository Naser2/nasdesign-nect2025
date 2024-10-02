'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import Login from "@/components/auth/Login"

const AuthPage = () => {
    return (
      <Login />
        
    )
  }
  



  export default AuthPage