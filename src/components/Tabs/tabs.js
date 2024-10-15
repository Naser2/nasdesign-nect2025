import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Define the structure for each tab
const tabs = [
  {
    value: "account",
    label: "Account",
    title: "Account",
    description: "Make changes to your account here. Click save when you're done.",
    fields: [
      { id: "name", label: "Name", defaultValue: "Pedro Duarte" },
      { id: "username", label: "Username", defaultValue: "@peduarte" }
    ]
  },
  {
    value: "password",
    label: "Password",
    title: "Password",
    description: "Change your password here. After saving, you'll be logged out.",
    fields: [
      { id: "current", label: "Current password", type: "password" },
      { id: "new", label: "New password", type: "password" }
    ]
  },
  {
    value: "profile",
    label: "Profile",
    title: "Profile Information",
    description: "Update your profile details such as bio, website, and gender.",
    fields: [
      { id: "first_name", label: "First Name", defaultValue: "John" },
      { id: "last_name", label: "Last Name", defaultValue: "Doe" },
      { id: "bio", label: "Bio", defaultValue: "Bodybuilding enthusiast" },
      { id: "gender", label: "Gender", defaultValue: "Male" }
    ]
  }
]

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <Card>
            <CardHeader>
              <CardTitle>{tab.title}</CardTitle>
              <CardDescription>{tab.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {tab.fields.map((field) => (
                <div key={field.id} className="space-y-1">
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input id={field.id} defaultValue={field.defaultValue || ""} type={field.type || "text"} />
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
