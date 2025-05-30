import TipTapEditor from "@/components/Editor/TipTap"
import Navbar from "@/components/Navbar"

type Props = {}

function SingleNote({}: Props) {
  return (
    <div className=" h-full">
      <Navbar />
      <div className="h-full">
        <TipTapEditor initialContent="Write you notes here........." />
      </div>
    </div>
  )
}

export default SingleNote