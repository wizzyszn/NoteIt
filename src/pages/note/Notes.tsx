import type { Note } from "@/types";
import EmptyState from "./EmptyState";
import empty from "@/assets/empty2.png";
import { Clock, Pin, Star } from "lucide-react";
type Props = {
  notes: Note[];
  loading: boolean;
};

function Notes({ notes, loading }: Props) {
  if (loading) {
    return <div> loading......</div>;
  }
  return (
    <div className="h-[30rem]  overflow-y-auto relative">
      {notes.length < 1 ? (
        <EmptyState />
      ) : (
        <div className=" flex gap-6 flex-col p-2">
          {notes.map(
            ({
              id,
              heading,
              subHeading,
              thumbnail,
              readDuration,
              favourite,
              pinned,
            }) => {
              return (
                <div
                  key={id}
                  className=" grid grid-cols-2 h-[256px] rounded-[12px] hover:bg-highlight-0 transition-colors duration-300  ease-in-out cursor-pointer relative"
                >
                  <div className="relative rounded-[12px]">
                    <img
                      className="absolute overflow-hidden w-full h-full object-cover rounded-tl-[12px] rounded-bl-[12px]"
                      src={thumbnail || empty}
                      alt={thumbnail}
                    />
                  </div>
                  <div className="p-3">
                    <div className=" flex justify-between">
                      <h3 className=" font-semibold text-lg">{heading}</h3>
                      <div className="flex justify-center items-center gap-2">
                        {" "}
                        {pinned && <Pin size={18} />}
                        {favourite && (
                          <Star size={18} fill="#F2B526" stroke="0px" />
                        )}
                      </div>
                    </div>

                    <h5 className=" text-txt-secondary-white">{subHeading}</h5>
                  </div>
                  <div className="absolute bottom-6 right-6 flex items-center justify-center gap-2 text-xs">
                    <Clock size={20} />
                    {readDuration && <span>{readDuration} mins read </span>}
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}

export default Notes;
