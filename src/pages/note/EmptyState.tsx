import noNote from "@/assets/noNotes.png";
function EmptyState() {
  return (
    <div className=" min-h-full absolute w-full flex justify-center items-center flex-col gap-3">
      <img src={noNote} alt={noNote} />
      <div className=" flex flex-col gap-2 justify-center items-center ">
        <h2 className=" font-semibold text-lg">No notes yet</h2>
        <p className=" text-txt-secondary-white">
          Create your first note to get started
        </p>
        <button className=" rounded-[20px] w-[96px] h-[40px] bg-customBg-btn-2 mt-4 hover:scale-110 transition-all duration-150 ease-out">
          New note
        </button>
      </div>
    </div>
  );
}

export default EmptyState;
