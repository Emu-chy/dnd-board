import { forwardRef } from "react";
import { Textarea, TextareaProps } from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";

export const AutoCustomTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return <Textarea as={ResizeTextarea} minH="unset" ref={ref} {...props} />;
});
