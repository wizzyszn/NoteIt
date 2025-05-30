import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from "react";
import Dropzone from "react-dropzone";

const NewNote: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  return (
    <>
      <div className=" flex flex-col gap-6">
        <h4 className=" text-lg">New Note</h4>
        <Input
          className=" bg-input-1 border-0 w-[448px] h-[56px] rounded-[12px]"
          placeholder="Note name"
          ref={ref}
        />
        <div className=" border border-dashed w-[928px] h-[232px] rounded-[12px] border-customBorder-1  ">
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="h-full flex justify-center flex-col text-center items-center gap-3"
              >
                <input {...getInputProps()} />
                <h6 className=" text-lg">
                  Drag 'n' drop your thumbnail here, or click to select a
                  thumbnail
                </h6>
                <p className=" text-sm text-txt-secondary-white ">
                  Or click to upload
                </p>
                <button className=" p-2 rounded-[20px] bg-customBg-btn-2 text-sm w-fit">
                  Upload
                </button>
              </div>
            )}
          </Dropzone>
        </div>

        <button className=" bg-customBg-btn-3 text-txt-primary-dark p-3  rounded-[20px] place-self-end">
          Create
        </button>
      </div>
    </>
  );
};

export default NewNote;
