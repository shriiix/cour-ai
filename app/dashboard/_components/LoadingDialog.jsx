import React from 'react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function LoadingDialog({ loading }) {
  return (
      <AlertDialog open={loading}>           
          <AlertDialogContent>
              <AlertDialogHeader>
                  {/* Hidden title for accessibility */}
                  <AlertDialogTitle>
                      <VisuallyHidden>Loading</VisuallyHidden>
                  </AlertDialogTitle>               
                  <AlertDialogDescription>
                      <div className="flex flex-col items-center py-10">
                          <img src="/loader.gif" width={100} height={100} />
                          <h2>Please wait, AI is working on your course!</h2>
                      </div>
                  </AlertDialogDescription>
              </AlertDialogHeader>
          </AlertDialogContent>
      </AlertDialog>
  );
}

export default LoadingDialog;
