import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import UnderlineExtension from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import LinkExtension from "@tiptap/extension-link";
import TableExtension from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import {
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Underline as UnderlineIcon,
  Strikethrough as StrikethroughIcon,
  Code as CodeIcon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  Quote as QuoteIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Link as LinkIcon,
  Table as TableIcon,
  Highlighter as HighlighterIcon,
  AlignLeft as AlignLeftIcon,
  AlignCenter as AlignCenterIcon,
  AlignRight as AlignRightIcon,
  AlignJustify as AlignJustifyIcon,
} from "lucide-react";

interface TipTapEditorProps {
  initialContent?: string;
  onUpdate?: (content: string) => void;
}

const TipTapEditor: React.FC<TipTapEditorProps> = ({
  initialContent = "<p>Start writing your content here...</p>",
  onUpdate,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      UnderlineExtension,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({
        multicolor: true,
      }),
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-blue-400 underline hover:text-blue-300",
        },
      }),
      TableExtension.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      if (onUpdate) {
        onUpdate(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none p-4 min-h-[calc(100vh-64px)] w-full",
      },
    },
  });

  const addLink = (): void => {
    const url = window.prompt("Enter URL:");
    if (url && editor) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const addTable = (): void => {
    if (editor) {
      editor
        .chain()
        .focus()
        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
        .run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div
      className="w-full h-screen flex flex-col"
      style={{ backgroundColor: "#171712" }}
    >
      <div
        className="flex flex-wrap items-center gap-1 p-3 border-b border-gray-600"
        style={{ backgroundColor: "#1a1a15" }}
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("bold") ? "bg-gray-600" : ""
          }`}
          title="Bold"
        >
          <BoldIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("italic") ? "bg-gray-600" : ""
          }`}
          title="Italic"
        >
          <ItalicIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("underline") ? "bg-gray-600" : ""
          }`}
          title="Underline"
        >
          <UnderlineIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("strike") ? "bg-gray-600" : ""
          }`}
          title="Strikethrough"
        >
          <StrikethroughIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("code") ? "bg-gray-600" : ""
          }`}
          title="Inline Code"
        >
          <CodeIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("highlight") ? "bg-gray-600" : ""
          }`}
          title="Highlight"
        >
          <HighlighterIcon size={16} className="text-white" />
        </button>

        <div className="w-px h-6 bg-gray-600 mx-1"></div>

        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive({ textAlign: "left" }) ? "bg-gray-600" : ""
          }`}
          title="Align Left"
        >
          <AlignLeftIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive({ textAlign: "center" }) ? "bg-gray-600" : ""
          }`}
          title="Align Center"
        >
          <AlignCenterIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive({ textAlign: "right" }) ? "bg-gray-600" : ""
          }`}
          title="Align Right"
        >
          <AlignRightIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive({ textAlign: "justify" }) ? "bg-gray-600" : ""
          }`}
          title="Justify"
        >
          <AlignJustifyIcon size={16} className="text-white" />
        </button>

        <div className="w-px h-6 bg-gray-600 mx-1"></div>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("bulletList") ? "bg-gray-600" : ""
          }`}
          title="Bullet List"
        >
          <ListIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("orderedList") ? "bg-gray-600" : ""
          }`}
          title="Numbered List"
        >
          <ListOrderedIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("blockquote") ? "bg-gray-600" : ""
          }`}
          title="Quote"
        >
          <QuoteIcon size={16} className="text-white" />
        </button>

        <div className="w-px h-6 bg-gray-600 mx-1"></div>

        <select
          value={
            editor.isActive("heading", { level: 1 })
              ? "h1"
              : editor.isActive("heading", { level: 2 })
              ? "h2"
              : editor.isActive("heading", { level: 3 })
              ? "h3"
              : editor.isActive("heading", { level: 4 })
              ? "h4"
              : editor.isActive("heading", { level: 5 })
              ? "h5"
              : editor.isActive("heading", { level: 6 })
              ? "h6"
              : "p"
          }
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            if (value === "p") {
              editor.chain().focus().setParagraph().run();
            } else {
              const level = parseInt(value.replace("h", "")) as
                | 1
                | 2
                | 3
                | 4
                | 5
                | 6;
              editor.chain().focus().toggleHeading({ level }).run();
            }
          }}
          className="px-3 py-1 rounded text-white bg-gray-700 border border-gray-600 text-sm"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="h5">Heading 5</option>
          <option value="h6">Heading 6</option>
        </select>

        <div className="w-px h-6 bg-gray-600 mx-1"></div>

        <button
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-700 ${
            editor.isActive("link") ? "bg-gray-600" : ""
          }`}
          title="Add Link"
        >
          <LinkIcon size={16} className="text-white" />
        </button>

        <button
          onClick={addTable}
          className="p-2 rounded hover:bg-gray-700"
          title="Insert Table"
        >
          <TableIcon size={16} className="text-white" />
        </button>

        <div className="w-px h-6 bg-gray-600 mx-1"></div>

        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Undo"
        >
          <UndoIcon size={16} className="text-white" />
        </button>

        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Redo"
        >
          <RedoIcon size={16} className="text-white" />
        </button>
      </div>

      <div className="flex-1 text-white overflow-auto" style={{ backgroundColor: "#171712" }}>
        <EditorContent
          editor={editor}
          className="prose-headings:text-white prose-p:text-white prose-strong:text-white prose-em:text-white prose-code:text-gray-300 prose-code:bg-gray-800 prose-blockquote:text-gray-300 prose-blockquote:border-gray-600 prose-ul:text-white prose-ol:text-white prose-li:text-white w-full"
        />
      </div>
    </div>
  );
};

export default TipTapEditor;