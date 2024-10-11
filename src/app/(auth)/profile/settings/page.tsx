'use client';
import { useAppContext } from '../../../context';

import { Button } from "@/components/ui/button";


import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from 'react';
import { useHelpers } from '@/hooks/useHelpers';

export default function SettingsPage() {
  const { user, setUser } = useAppContext();
  const { loading, setLoading, saveUser } = useHelpers(); // Destructure saveUser from useHelpers
  const [data, setData] = useState<any>({
    display_name: '',
    username: '',
  });

  useEffect(() => {
    if (user) {
      const { user_metadata } = user;
      setData(user_metadata)
    }
  }, [user]);

  return <div className="grid gap-6">
    <Card className="card">
      <CardHeader>
        <header className="flex items-center justify-between">
          <div className="grid gap-1">
            <CardTitle>Email notifications</CardTitle>
            <CardDescription>Turn this on if you want to receive e-mail notifications.</CardDescription>
          </div>
          <Switch
            checked={data?.email_notifications}
            name="email_notifications"
            id="email_notifications"
            onCheckedChange={(b: boolean) => saveUser({
              metadata: {
                email_notifications: b
              },
              setUser
            })}
          />
        </header>
      </CardHeader>
    </Card>
    <Card className="card border-red-500 dark:border-red-900 bg-red-50 dark:bg-red-950">
      <CardHeader>
        <CardTitle>Danger zone</CardTitle>
        <CardDescription>Permanently remove your profile and data from the platform. This action is not reversible.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete my profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete my profile</DialogTitle>
              <DialogDescription>
                Please confirm that you want to delete your profile.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            <Button {...{
                loading,
                label: "Delete",
                onClick: () => saveUser({ setLoading, metadata: data }),
                setUser
              }} />
            
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  </div>
}