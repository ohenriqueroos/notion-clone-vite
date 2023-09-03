import { Box, Button, Stack, TextField } from "@mui/material";
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
        <TextField
          hiddenLabel
          sx={{
            width: 62,
            // "& .MuiOutlinedInput-input": {
            //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            //     "-webkit-appearance": "none",
            //   },
            // },
          }}
          type="number"
          value={editor.getAttributes("textStyle").fontSize || 12}
          variant="outlined"
          size="small"
          onChange={(e) =>
            editor.chain().focus().setFontSize(e.target.value).run()
          }
        />
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleBold().run()}
          size="small"
          sx={(theme) => ({
            backgroundColor: !editor.isActive("bold")
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
            color: !editor.isActive("bold")
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          })}
        >
          <FormatBoldIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          size="small"
          sx={(theme) => ({
            backgroundColor: !editor.isActive("italic")
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
            color: !editor.isActive("italic")
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          })}
        >
          <FormatItalicIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          size="small"
          sx={(theme) => ({
            backgroundColor: !editor.isActive("strike")
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
            color: !editor.isActive("strike")
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          })}
        >
          <FormatStrikethroughIcon fontSize="small" />
        </Button>
        <Button
          variant="outlined"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          size="small"
          sx={(theme) => ({
            backgroundColor: !editor.isActive("codeBlock")
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
            color: !editor.isActive("codeBlock")
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          })}
        >
          <CodeIcon fontSize="small" />
        </Button>
      </Stack>
    </Box>
  );
};

export default EditorActions;
