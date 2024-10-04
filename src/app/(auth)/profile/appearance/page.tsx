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
    <div className="flex-1 lg:max-w-2xl">
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium">Appearance</h3>
      <p className="text-sm text-muted-foreground">
        Customize the appearance of the app. Automatically switch between day
        and night themes.
      </p>
    </div>
    <div
      data-orientation="horizontal"
      role="none"
      className="shrink-0 bg-border h-[1px] w-full"
    />
    <form className="space-y-8">
      <div className="space-y-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor=":r70:-form-item"
        >
          Font
        </label>
        <div className="relative w-max">
          <select
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none font-normal"
            name="font"
            id=":r70:-form-item"
            aria-describedby=":r70:-form-item-description"
            aria-invalid="false"
          >
            <option value="inter">Inter</option>
            <option value="manrope">Manrope</option>
            <option value="system">System</option>
          </select>
          <svg
            width={15}
            height={15}
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-2.5 h-4 w-4 opacity-50"
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p
          id=":r70:-form-item-description"
          className="text-[0.8rem] text-muted-foreground"
        >
          Set the font you want to use in the dashboard.
        </p>
      </div>
      <div className="space-y-1">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor=":r71:-form-item"
        >
          Theme
        </label>
        <p
          id=":r71:-form-item-description"
          className="text-[0.8rem] text-muted-foreground"
        >
          Select the theme for the dashboard.
        </p>
        <div
          role="radiogroup"
          aria-required="false"
          dir="ltr"
          className="grid max-w-md grid-cols-2 gap-8 pt-2"
          tabIndex={0}
          style={{ outline: "none" }}
        >
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 [&:has([data-state=checked])>div]:border-primary"
              htmlFor=":r72:-form-item"
            >
              <button
                type="button"
                role="radio"
                aria-checked="true"
                data-state="checked"
                value="light"
                className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                id=":r72:-form-item"
                aria-describedby=":r72:-form-item-description"
                aria-invalid="false"
                tabIndex={-1}
                data-radix-collection-item=""
              >
                <span
                  data-state="checked"
                  className="flex items-center justify-center"
                >
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 fill-primary"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <input
                aria-hidden="true"
                tabIndex={-1}
                type="radio"
                defaultValue="light"
                defaultChecked=""
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
              <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                  <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Light
              </span>
            </label>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 [&:has([data-state=checked])>div]:border-primary"
              htmlFor=":r74:-form-item"
            >
              <button
                type="button"
                role="radio"
                aria-checked="false"
                data-state="unchecked"
                value="dark"
                className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                id=":r74:-form-item"
                aria-describedby=":r74:-form-item-description"
                aria-invalid="false"
                tabIndex={-1}
                data-radix-collection-item=""
              />
              <input
                aria-hidden="true"
                tabIndex={-1}
                type="radio"
                defaultValue="dark"
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
              <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                  <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                  <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                    <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                  </div>
                </div>
              </div>
              <span className="block w-full p-2 text-center font-normal">
                Dark
              </span>
            </label>
          </div>
        </div>
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        type="submit"
      >
        Update preferences
      </button>
    </form>
  </div>
</div>

    </div>
  </div>
}