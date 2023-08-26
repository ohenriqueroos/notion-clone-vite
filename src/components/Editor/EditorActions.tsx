import { Box, Button, Stack } from "@mui/material";
import { Editor } from "@tiptap/react";

//Icons
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import CodeIcon from "@mui/icons-material/Code";

const EditorActions = ({ editor }: { editor: Editor }) => {
  return (
    <Box
      sx={(theme) => ({
        mb: 4,
        px: 2,
        width: "fit-content",
        height: "3rem",
        boxShadow: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        zIndex: 1,
      })}
      display={"flex"}
      alignItems={"center"}
      gap={4}
    >
      <Stack direction={"row"} gap={1}>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleBold().run()}
          size="small"
        >
          <FormatBoldIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          size="small"
        >
          <FormatItalicIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          size="small"
        >
          <FormatStrikethroughIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          size="small"
        >
          <CodeIcon fontSize="small" />
        </Button>
      </Stack>
    </Box>
  );
};

export default EditorActions;
