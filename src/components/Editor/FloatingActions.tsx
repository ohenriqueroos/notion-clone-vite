import { Box } from "@mui/material";
import { Editor } from "@tiptap/react";
import FloatingButton from "./FloatingButton";

const FloatingActions = ({ editor }: { editor: Editor }) => {
  const onTypeTextHandler = () => {
    if (editor) {
      const { tr } = editor.view.state;
      tr.delete(tr.selection.anchor - 1, tr.selection.anchor);
      editor.view.dispatch(tr);
      editor.view.focus();
    }
  };

  return (
    <Box
      sx={(theme) => ({
        p: 2,
        width: 300,
        height: 400,
        overflowY: "scroll",
        boxShadow: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      })}
    >
      <FloatingButton
        title="Text"
        description="Just start writing."
        image="http://www.notion.so/images/blocks/text/en-US.png"
        alt="text"
        onClick={() => {
          editor.chain().focus();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Heading 1"
        description="Big heading."
        image="http://www.notion.so/images/blocks/header.57a7576a.png"
        alt="heading 1"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 1 }).run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Heading 2"
        description="Medium heading."
        image="http://www.notion.so/images/blocks/subheader.9aab4769.png"
        alt="heading 2"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Heading 3"
        description="Small heading."
        image="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
        alt="heading 3"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 3 }).run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Ordered list"
        description="Create an ordered list."
        image="http://www.notion.so/images/blocks/numbered-list.0406affe.png"
        alt="ordered list"
        onClick={() => {
          editor.chain().focus().toggleOrderedList().run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Bullet list"
        description="Create a bullet list."
        image="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
        alt="bullet list"
        onClick={() => {
          editor.chain().focus().toggleBulletList().run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Code"
        description="Capture a code snippet"
        image="http://www.notion.so/images/blocks/code.a8b201f4.png"
        alt="code"
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Citação"
        description="Capture a quote"
        image="http://www.notion.so/images/blocks/quote/en-US.png"
        alt="quote"
        onClick={() => {
          editor.chain().focus().toggleBlockquote().run();
          onTypeTextHandler();
        }}
      />

      <FloatingButton
        title="Citação"
        description="Capture a quote"
        image="http://www.notion.so/images/blocks/quote/en-US.png"
        alt="quote"
        onClick={() => {
          editor.commands.insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: true,
          });
          onTypeTextHandler();
        }}
      />
    </Box>
  );
};

export default FloatingActions;
