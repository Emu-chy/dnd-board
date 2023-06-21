import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Column from "./components/Column";
import { columnType } from "./utils/enum";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <>
            <Heading
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                fontWeight="bold"
                textAlign="center"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                mt={4}
            >
                Welcome to DnD Board
            </Heading>
            <Container maxWidth="container.lg" px={4} py={10}>
                <DndProvider backend={HTML5Backend}>
                    <SimpleGrid columns={[2, null, 4]} spacing={{ base: 16, md: 4 }}>
                        <Column column={columnType.TO_DO} />
                        <Column column={columnType.IN_PROGRESS} />
                        <Column column={columnType.BLOCKED} />
                        <Column column={columnType.COMPLETED} />
                    </SimpleGrid>
                </DndProvider>
            </Container>
        </>
    );
}

export default App;
