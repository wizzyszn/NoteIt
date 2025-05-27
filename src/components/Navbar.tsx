import { Settings } from "lucide-react"
import Logo from "./Logo"
import Avatar from "./Avatar"

type Props = {}

function Navbar({}: Props) {
  return (
    <div className=" min-h-0 p-3 border-b flex justify-between items-center">
      <div><Logo /></div>
      <div className="flex justify-between items-center gap-4 ">
        <div className="flex justify-center items-center rounded-full bg-customBg-btn-2 p-2">
          <Settings size={16} />
        </div>
        <Avatar />
      </div>
    </div>
  )
}

export default Navbar