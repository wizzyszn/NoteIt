import { cx } from "class-variance-authority";
import avi from "@/assets/Depth 4, Frame 2.png";
type Props = {
  className?: string;
};

function Avatar({ className }: Props) {
  return (
    <div className={cx(" relative rounded-full size-10", className)}>
      <img
        src={avi}
        alt="avi"
        className=" absolute size-full overflow-hidden"
      />
    </div>
  );
}

export default Avatar;
