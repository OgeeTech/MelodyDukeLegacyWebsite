
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export const EmailJSInstructions = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center cursor-help ml-2 text-blue-500">
            <InfoIcon size={16} />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-md">
          <div className="p-2">
            <p className="font-medium">EmailJS Configuration Required</p>
            <p className="text-sm mt-1">
              To enable email sending, you need to:
            </p>
            <ol className="text-xs list-decimal ml-4 mt-1">
              <li>Create an account at emailjs.com</li>
              <li>Create an email service and template</li>
              <li>Replace the placeholder IDs in ContactForm.tsx with your own</li>
              <li>Initialize EmailJS in your app with your user ID</li>
            </ol>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
