import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import "./index.css";
import { Plus, Search } from "lucide-react";
import Notes from "./Notes";
import type { Note } from "@/types";
import Note2 from "@/assets/Note2.png";
import Note3 from "@/assets/Note3.png";
import ComponentWithSheet from "@/components/HOC/ComponentWithSheet";
import NewNote from "./NewNote";
type Props = {
  openModal: () => void;
};

const dummyNotes: Note[] = [
  {
    id: 1,
    visibility: false,
    heading: "Meeting Notes",
    subHeading: "Important points from the team meeting",
    thumbnail: undefined,
    readDuration: 3,
    pinned: true,
    favourite: true,
  },
  {
    id: 2,
    visibility: false,
    heading: "Meeting Notes",
    subHeading: "Important points from the team meeting",
    thumbnail: Note2,
  },
  {
    id: 3,
    visibility: false,
    heading: "Meeting Notes",
    subHeading: "Important points from the team meeting",
    thumbnail: Note3,
  },
];
function Note({ openModal }: Props) {
  return (
    <div>
      <Navbar />
      <div className=" mt-5 px-[15%] max-[760px]:px-[5%] h-full">
        <div className="relative w-full bg-input-1 rounded-[12px]">
          <Search className="absolute top-1/2 left-4 h-5 w-5 text-txt-primary-yellow transform -translate-y-1/2" />
          <Input
            id="search"
            placeholder="Search notes"
            className="pl-12 py-6 border-0 rounded-[12px]"
          />
        </div>
        <div className=" flex items-center justify-end mt-5">
          <button
            className=" w-[64px] h-[56px] rounded-[28px] bg-customBg-btn-3 relative hover:scale-110 transition-all duration-150 ease-out"
            onClick={openModal}
          >
            <Plus
              size={26}
              className=" text-txt-primary-dark absolute top-1/3 left-4"
            />
          </button>
        </div>
        <div>
          <h1 className=" text-2xl font-semibold mb-5">My Notes</h1>
          <Notes notes={dummyNotes} loading={false} />
        </div>
      </div>
    </div>
  );
}
const ExtendedNote = ComponentWithSheet(Note, NewNote);
export default ExtendedNote;
