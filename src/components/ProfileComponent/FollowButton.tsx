import { followUser } from "@/lib/actions";
import SubmitButton from "@/components/SubmitButton";
import { buttonVariants } from "@/components/ButtonCustom"
import { cn } from "@/lib/cn";

function FollowButton({
  profileId,
  isFollowing,
  className,
  buttonClassName,
}: {
  profileId: string;
  isFollowing?: boolean;
  className?: string;
  buttonClassName?: string;
}) {
  console.log("IS_FOLLOWING", isFollowing);
  return (
    <form action={followUser} className={className}>
      <input type="hidden" value={profileId} name="id" />
      <SubmitButton
  className={buttonVariants({
    variant: isFollowing ? "secondary" : "default",
    className: cn("!font-bold w-full", buttonClassName),
    size: "sm", // No href needed here
  })}
>
  {isFollowing ? "Unfollow" : "Follow"}
</SubmitButton>
    </form>
  );
}

export default FollowButton;
