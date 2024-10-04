'use client';
import { useAppContext } from '@/app/(auth)/context';
import ButtonComponent from '@/components/ButtonComponent';
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
import clientSupabase from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const saveUser = async ({ metadata, setLoading, setUser }: any) => {
  try {
    if (setLoading) setLoading(true);
    const { data, error } = await clientSupabase
      .auth
      .updateUser({
        data: {
          ...metadata
        }
      })

    if (data) {
      if (setUser) {
        const { user } = data;
        setUser(user);
      }
      toast.success('Profile saved successfully!')
      return data;
    }
  } catch (error: any) {
    toast.error('Sorry, something wrong happened. Please try again.')
    throw new Error(error);
  } finally {
    if (setLoading) setLoading(false);
  }
};


export default function ProfileGeneral() {
  const { user, setUser } = useAppContext();
  const { loading, setLoading } = useHelpers();
  const [data, setData] = useState<any>({
    display_name: "",
    username: ""
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
    <div className="">
    <div className="space-y-6">
  <div>
    <h3 className="text-lg font-medium">Notifications</h3>
    <p className="text-sm text-muted-foreground">
      Configure how you receive notifications.
    </p>
  </div>
  <div
    data-orientation="horizontal"
    role="none"
    className="shrink-0 bg-border h-[1px] w-full"
  />
  <form className="space-y-8">
    <div className="space-y-3">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor=":r87:-form-item"
      >
        Notify me about...
      </label>
      <div
        role="radiogroup"
        aria-required="false"
        dir="ltr"
        className="gap-2 flex flex-col space-y-1"
        id=":r87:-form-item"
        aria-describedby=":r87:-form-item-description"
        aria-invalid="false"
        tabIndex={0}
        style={{ outline: "none" }}
      >
        <div className="flex items-center space-x-3 space-y-0">
          <button
            type="button"
            role="radio"
            aria-checked="false"
            data-state="unchecked"
            value="all"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id=":r88:-form-item"
            aria-describedby=":r88:-form-item-description"
            aria-invalid="false"
            tabIndex={-1}
            data-radix-collection-item=""
          />
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="radio"
            defaultValue="all"
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 16,
              height: 16
            }}
          />
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
            htmlFor=":r88:-form-item"
          >
            All new messages
          </label>
        </div>
        <div className="flex items-center space-x-3 space-y-0">
          <button
            type="button"
            role="radio"
            aria-checked="false"
            data-state="unchecked"
            value="mentions"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id=":r8a:-form-item"
            aria-describedby=":r8a:-form-item-description"
            aria-invalid="false"
            tabIndex={-1}
            data-radix-collection-item=""
          />
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="radio"
            defaultValue="mentions"
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 16,
              height: 16
            }}
          />
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
            htmlFor=":r8a:-form-item"
          >
            Direct messages and mentions
          </label>
        </div>
        <div className="flex items-center space-x-3 space-y-0">
          <button
            type="button"
            role="radio"
            aria-checked="false"
            data-state="unchecked"
            value="none"
            className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id=":r8c:-form-item"
            aria-describedby=":r8c:-form-item-description"
            aria-invalid="false"
            tabIndex={-1}
            data-radix-collection-item=""
          />
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="radio"
            defaultValue="none"
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 16,
              height: 16
            }}
          />
          <label
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
            htmlFor=":r8c:-form-item"
          >
            Nothing
          </label>
        </div>
      </div>
    </div>
    <div>
      <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
      <div className="space-y-4">
        <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
              htmlFor=":r8e:-form-item"
            >
              Communication emails
            </label>
            <p
              id=":r8e:-form-item-description"
              className="text-[0.8rem] text-muted-foreground"
            >
              Receive emails about your account activity.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
            id=":r8e:-form-item"
            aria-describedby=":r8e:-form-item-description"
            aria-invalid="false"
          >
            <span
              data-state="unchecked"
              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            />
          </button>
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="checkbox"
            defaultValue="on"
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 36,
              height: 20
            }}
          />
        </div>
        <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
              htmlFor=":r8f:-form-item"
            >
              Marketing emails
            </label>
            <p
              id=":r8f:-form-item-description"
              className="text-[0.8rem] text-muted-foreground"
            >
              Receive emails about new products, features, and more.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="false"
            data-state="unchecked"
            value="on"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
            id=":r8f:-form-item"
            aria-describedby=":r8f:-form-item-description"
            aria-invalid="false"
          >
            <span
              data-state="unchecked"
              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            />
          </button>
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="checkbox"
            defaultValue="on"
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 36,
              height: 20
            }}
          />
        </div>
        <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
              htmlFor=":r8g:-form-item"
            >
              Social emails
            </label>
            <p
              id=":r8g:-form-item-description"
              className="text-[0.8rem] text-muted-foreground"
            >
              Receive emails for friend requests, follows, and more.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="true"
            data-state="checked"
            value="on"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
            id=":r8g:-form-item"
            aria-describedby=":r8g:-form-item-description"
            aria-invalid="false"
          >
            <span
              data-state="checked"
              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            />
          </button>
          <input
            aria-hidden="true"
            tabIndex={-1}
            type="checkbox"
            defaultValue="on"
            defaultChecked=""
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 36,
              height: 20
            }}
          />
        </div>
        <div className="space-y-2 flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <label
              className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
              htmlFor=":r8h:-form-item"
            >
              Security emails
            </label>
            <p
              id=":r8h:-form-item-description"
              className="text-[0.8rem] text-muted-foreground"
            >
              Receive emails about your account activity and security.
            </p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked="true"
            data-state="checked"
            data-disabled=""
            disabled=""
            value="on"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
            aria-readonly="true"
            id=":r8h:-form-item"
            aria-describedby=":r8h:-form-item-description"
            aria-invalid="false"
          >
            <span
              data-state="checked"
              data-disabled=""
              className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
            />
          </button>
          <input
            aria-hidden="true"
            disabled=""
            tabIndex={-1}
            type="checkbox"
            defaultValue="on"
            defaultChecked=""
            style={{
              transform: "translateX(-100%)",
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              width: 36,
              height: 20
            }}
          />
        </div>
      </div>
    </div>
    <div className="flex flex-row items-start space-x-3 space-y-0">
      <button
        type="button"
        role="checkbox"
        aria-checked="false"
        data-state="unchecked"
        value="on"
        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        id=":r8i:-form-item"
        aria-describedby=":r8i:-form-item-description"
        aria-invalid="false"
      />
      <input
        aria-hidden="true"
        tabIndex={-1}
        type="checkbox"
        defaultValue="on"
        style={{
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          width: 16,
          height: 16
        }}
      />
      <div className="space-y-1 leading-none">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor=":r8i:-form-item"
        >
          Use different settings for my mobile devices
        </label>
        <p
          id=":r8i:-form-item-description"
          className="text-[0.8rem] text-muted-foreground"
        >
          You can manage your mobile notifications in the{" "}
          <a href="/examples/forms">mobile settings</a> page.
        </p>
      </div>
    </div>
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
      type="submit"
    >
      Update notifications
    </button>
  </form>
</div>

    </div>
  </div>
}