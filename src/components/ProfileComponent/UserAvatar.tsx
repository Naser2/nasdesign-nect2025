import { Avatar } from "../../ui/avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";
import  DefaultUserAvatar  from "@/components/mindConnect/ProfileComponent/whatsapp_user_avatar_Google Search.jpeg";
import Image from "next/image";

type Props = Partial<AvatarProps> & {
  user: Object | undefined;
};

function UserAvatar({ user, ...avatarProps }: Props) {
  console.log("USER_avatar: " + user)
  return (
    <Avatar className="relative h-8 w-8" {...avatarProps}>
      <Image
        src={user?.image  ? user?.image : DefaultUserAvatar.src}
          // "https://instagram.fpnq13-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fpnq13-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=3yECqrWF0dkAX-1fQPX&edm=ALlQn9MBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfC4YI9GjTczPKHhpu6gUJwwPYXUTESZ1WNE1OrYzfSCZQ&oe=656D360F&_nc_sid=e7f676"
        
        fill
        alt={`${user?.username ? user?.username : "default name"}'s profile picture lg`}
        className="rounded-full object-cover"
      />
    </Avatar>
  );
}

export default UserAvatar;
