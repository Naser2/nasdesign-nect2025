'use client';
import { useAppContext } from '../../../../context';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { useHelpers } from '@/hooks/useHelpers';

import { useEffect, useState } from 'react';



export default function ProfileGeneral() {
;
  const { user, setUser } = useAppContext();
  const { loading, setLoading, saveUser } = useHelpers(); // Destructure saveUser from useHelpers
  const [data, setData] = useState<any>({
    display_name: '',
    username: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setData({
      display_name: "",
      username: ""
    })
  }, [])

  useEffect(() => {
    if (user) {
      const { user_metadata } = user;
      setData(user_metadata)
    }
  }, [user]);

  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <CardTitle>Display name</CardTitle>
        <CardDescription>Please enter your full name, or a display name you are comfortable with.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input {...{
          type: "text",
          name: "display_name",
          value: data?.display_name || '',
          onChange: handleChange
        }} />
      </CardContent>
      <CardFooter>
        <Button {...{
          loading,
          label: "Save",
          onClick: () => saveUser({ setLoading, metadata: data }),
          setUser
        }} />
      </CardFooter>
    </Card>
    <Card className="card">
      <CardHeader>
        <CardTitle>Username</CardTitle>
        <CardDescription>This is your URL namespace. We will limit the characters to 30, with no spaces or special characters allowed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          name="username"
          value={data?.username || ''}
          maxLength={30}
          onChange={(e: any) => {
            const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
            e.target.value = value;
            handleChange(e);
          }}
        />
      </CardContent>
      <CardFooter>
      <Button {...{
        loading,
        label: "Save",
        onClick: () => saveUser({ setLoading, metadata: data }),
        setUser
      }} />
      </CardFooter>
    </Card>
  </div>
}