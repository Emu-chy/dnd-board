import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: (props: { chakraColor: string }) => ({
            body: {
                bg: props.chakraColor === "dark" ? "gray.800" : "white"
            }
        })
    }
})

export default theme;

