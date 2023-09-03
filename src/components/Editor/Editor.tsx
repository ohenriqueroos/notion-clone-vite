import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import html from "highlight.js/lib/languages/xml";
import ts from "highlight.js/lib/languages/typescript";

import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";

import "highlight.js/styles/tokyo-night-dark.css";
import FloatingButton from "./FloatingButton";
import EditorActions from "./EditorActions";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "./Extensions/fontSize";
import { Box } from "@mui/material";
import { Color } from "@tiptap/extension-color";
import { useEffect } from "react";
import { useSelector } from "react-redux";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("ts", ts);

const Editor = () => {
  const themeSelected = useSelector(
    (state: { theme: ITheme }) => state.theme.themeMode
  );

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Table.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
      }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({
        placeholder: "'/' para abrir o Menu...",
      }),
      TextStyle,
      Color,
      FontSize.configure({
        initialFontSize: "12",
        types: ["textStyle"],
      }),
    ],
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  const onTypeTextHandler = () => {
    if (editor) {
      const { tr } = editor.view.state;
      tr.delete(tr.selection.anchor - 1, tr.selection.anchor);
      editor.view.dispatch(tr);
      editor.view.focus();
    }
  };

  const onSetColorHandler = (color: string) => {
    editor?.commands.setColor(color);
  };

  useEffect(() => {
    if (themeSelected) onSetColorHandler("#fff");
    if (!themeSelected) onSetColorHandler("#000");
  }, [onSetColorHandler]);

  return (
    <>
      {editor && <EditorActions editor={editor} />}
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
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
        </FloatingMenu>
      )}
    </>
  );
};

export default Editor;
