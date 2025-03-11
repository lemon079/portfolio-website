import useMedia from "use-media";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "./drawer";

interface NoteModalProps {
  isNoteOpen: boolean,
  setIsNoteOpen: () => void
}

export function NoteModal({ isNoteOpen, setIsNoteOpen }: NoteModalProps) {
  const isDisplay = useMedia({ minWidth: "1024px" });

  if (isDisplay) {
    return (
      <Dialog open={isNoteOpen} onOpenChange={setIsNoteOpen}>
        <DialogContent className="bg-neutral-100 items-center flex flex-col justify-center lg:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">
              Hey there! 👋
            </DialogTitle>
            <DialogDescription className="text-lg text-center">
              Your feedback means the world to me! If you have any suggestions,
              ideas, or just want to share your thoughts, feel free to reach out
              via LinkedIn or you can just mail me.
              <span className="block mt-5 border-2 border-neutral-400 p-2 bg-neutral-200">
                I'm always looking to improve, so let me know how I can make
                things better! 🚀
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="text-center mt-5 bg-black text-white p-4 rounded-full">Building in Progress..</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isNoteOpen} onOpenChange={setIsNoteOpen}>
      <DrawerContent className="bg-neutral-100 items-center p-5">
        <div className="max-w-lg">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-semibold text-center">
              Hey there! 👋
            </DrawerTitle>
            <DrawerDescription className="text-base">
              Your feedback means the world to me! If you have any suggestions,
              ideas, or just want to share your thoughts, feel free to reach out
              via LinkedIn or you can just mail me.
              <span className="block mt-5 border-2 border-neutral-400 p-2 bg-neutral-200">
                I'm always looking to improve, so let me know how I can make
                things better! 🚀
              </span>
            </DrawerDescription>
          </DrawerHeader>
          <div className="text-center mt-5 bg-black text-white p-4 rounded-full">Building in Progress..</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
