import { Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

export function Loading({ state }: { state: boolean }) {
  return (
    <AlertDialog open={state}>
      <AlertDialogContent className="max-w-md p-0 bg-transparent border-none shadow-none">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col items-center shadow-lg">
          <Loader2 className="h-12 w-12 text-purple-600 animate-spin" />
          <p className="mt-4 text-lg font-semibold text-purple-800 dark:text-purple-300">
            Generating your AI video...
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
            This may take a few moments, do not refresh the page.
          </p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
