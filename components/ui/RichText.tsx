import type { ContentfulRichTextNode } from "@/lib/contentful";

function renderNode(node: ContentfulRichTextNode, index: number): React.ReactNode {
  if (node.nodeType === "text") {
    let el: React.ReactNode = node.value ?? "";
    for (const mark of node.marks ?? []) {
      if (mark.type === "bold") el = <strong key={index}>{el}</strong>;
      if (mark.type === "italic") el = <em key={index}>{el}</em>;
    }
    return el;
  }

  const children = (node.content ?? []).map((child, i) => renderNode(child, i));

  switch (node.nodeType) {
    case "document":
      return <>{children}</>;
    case "paragraph":
      return (
        <p key={index} className="mb-3 last:mb-0">
          {children}
        </p>
      );
    case "hyperlink":
      return (
        <a
          key={index}
          href={node.data?.uri ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] underline hover:no-underline"
        >
          {children}
        </a>
      );
    default:
      return <>{children}</>;
  }
}

export function RichText({ content }: { content: ContentfulRichTextNode }) {
  return <>{renderNode(content, 0)}</>;
}
