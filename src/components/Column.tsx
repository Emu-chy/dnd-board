import { AddIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, IconButton, Stack, useColorModeValue } from "@chakra-ui/react";
import { columnType } from "../utils/enum";
import { TaskModel } from "../utils/interfaces";
import Task from "./Task";

const ColumnColorScheme: Record<columnType, string> = {
    Todo: "gray",
    "In Progress": "blue",
    Blocked: "red",
    completed: "green",
};

const mockTask: TaskModel[] = [
    {
        id: "1",
        title: "Task-1",
        column: columnType.TO_DO,
        color: "red",
    },
    {
        id: "2",
        title: "Task-2",
        column: columnType.TO_DO,
        color: "blue",
    },
    {
        id: "3",
        title: "Task-3",
        column: columnType.TO_DO,
        color: "green",
    },
];
function Column({ column }: { column: columnType }) {
    const columnTasks = mockTask.map((task, index) => {
        return <Task key={task.id} task={task} index={index} />;
    });
    return (
        <Box>
            <Heading fontSize="md" mb={4} letterSpacing="wide">
                <Badge px={1} py={2} rounded="lg" colorScheme={ColumnColorScheme[column]}>
                    {column}
                </Badge>
            </Heading>
            <IconButton
                size="xs"
                w="full"
                color={useColorModeValue("gray.500", "gray.400")}
                bgColor={useColorModeValue("gray.100", "gray.700")}
                _hover={{ bgColor: useColorModeValue("gray.200", "gray.600") }}
                py={2}
                variant="solid"
                colorScheme="black"
                aria-label="add-task"
                icon={<AddIcon />}
            />
            <Stack
                direction={{ base: "row", md: "column" }}
                h={{ base: 300, md: 600 }}
                p={4}
                mt={2}
                spacing={4}
                bgColor={useColorModeValue("gray.50", "gray.900")}
                rounded="lg"
                boxShadow="md"
                overflow="auto"
            >
                {columnTasks}
            </Stack>
        </Box>
    );
}

export default Column;
