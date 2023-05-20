import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { TaskModel } from "../utils/interfaces";
import { DeleteIcon } from "@chakra-ui/icons";

type TaskProps = {
    index: number;
    task: TaskModel;
};

function Task({ index, task }: TaskProps) {
    return (
        <>
            <Box
                as="div"
                role="group"
                position="relative"
                rounded="lg"
                w={200}
                pl={3}
                pr={7}
                pt={3}
                pb={1}
                boxShadow="xl"
                cursor="grab"
                bgColor={task.color}
                fontWeight="bold"
            />
            <IconButton
                position="absolute"
                top={0}
                right={0}
                zIndex={100}
                aria-label="delete-task"
                size="md"
                colorScheme="solid"
                color={"gray.700"}
                icon={<DeleteIcon />}
                opacity={0}
                _groupHover={{
                    opacity: 1,
                }}
            />
            <Textarea
                value={task.title}
                fontWeight="semibold"
                cursor="inherit"
                border="none"
                p={0}
                resize="none"
                minH={70}
                maxH={200}
                focusBorderColor="none"
                color="gray.700"
            />
        </>
    );
}

export default Task;

{
    /* <Box
ref={ref}
as="div"
role="group"
position="relative"
rounded="lg"
w={200}
pl={3}
pr={7}
pt={3}
pb={1}
boxShadow="xl"
cursor="grab"
fontWeight="bold"
userSelect="none"
bgColor={task.color}
opacity={isDragging ? 0.5 : 1}
>
<IconButton
  position="absolute"
  top={0}
  right={0}
  zIndex={100}
  aria-label="delete-task"
  size="md"
  colorScheme="solid"
  color={'gray.700'}
  icon={<DeleteIcon />}
  opacity={0}
  _groupHover={{
    opacity: 1,
  }}
  onClick={handleDeleteClick}
/> */
}