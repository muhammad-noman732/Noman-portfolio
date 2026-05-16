import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

import { CodeBlock } from "@/components/blog/deployment/CodeBlock";
import { Callout } from "@/components/blog/deployment/Callout";
import { PhaseHeading } from "@/components/blog/deployment/PhaseHeading";
import { InlineCode } from "@/components/blog/deployment/InlineCode";
import { CommandLine } from "@/components/blog/deployment/CommandLine";
import { SectionDivider } from "@/components/blog/deployment/SectionDivider";

const components: MDXComponents = {
    h1: ({ children, ...props }) => (
        <h1
            className="mt-0 mb-8 text-4xl font-bold tracking-tight text-foreground"
            {...props}
        >
            {children}
        </h1>
    ),

    h2: ({ children, ...props }) => (
        <h2
            className="mt-14 mb-4 text-2xl font-semibold tracking-tight text-foreground border-b border-border pb-2"
            {...props}
        >
            {children}
        </h2>
    ),

    h3: ({ children, ...props }) => (
        <h3
            className="mt-10 mb-3 text-xl font-semibold text-foreground"
            {...props}
        >
            {children}
        </h3>
    ),

    h4: ({ children, ...props }) => (
        <h4
            className="mt-8 mb-2 text-lg font-semibold text-foreground"
            {...props}
        >
            {children}
        </h4>
    ),

    p: ({ children }) => (
        <p className="mb-5 leading-7 text-muted-foreground">{children}</p>
    ),

    ul: ({ children }) => (
        <ul className="mb-5 ml-6 list-disc space-y-1.5 text-muted-foreground">
            {children}
        </ul>
    ),

    ol: ({ children }) => (
        <ol className="mb-5 ml-6 list-decimal space-y-1.5 text-muted-foreground">
            {children}
        </ol>
    ),

    li: ({ children }) => (
        <li className="leading-7">{children}</li>
    ),

    blockquote: ({ children }) => (
        <blockquote className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground">
            {children}
        </blockquote>
    ),

    table: ({ children }) => (
        <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">{children}</table>
        </div>
    ),

    thead: ({ children }) => (
        <thead className="bg-muted text-muted-foreground">{children}</thead>
    ),

    th: ({ children }) => (
        <th className="border-b border-border px-4 py-2.5 text-left font-semibold">
            {children}
        </th>
    ),

    td: ({ children }) => (
        <td className="border-b border-border px-4 py-2.5 text-muted-foreground">
            {children}
        </td>
    ),

    tr: ({ children }) => (
        <tr className="transition-colors hover:bg-muted/40">{children}</tr>
    ),

    pre: ({ children }) => {
        return <div className="not-prose">{children}</div>;
    },

    code: async ({ children, className, ...props }: any) => {
        const isInline = !className?.includes("language-");
        if (isInline) return <InlineCode>{children}</InlineCode>;

        const language = className?.replace("language-", "") || "text";
        const code = String(children).trim();

        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(code, {
            lang: language,
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
        });

        return (
            <CodeBlock data-language={language}>
                <div dangerouslySetInnerHTML={{ __html: html }} className="[&>pre]:!bg-transparent [&>pre]:!p-0" />
            </CodeBlock>
        );
    },

    hr: () => <SectionDivider />,

    a: ({ href, children }) => (
        <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
            {children}
        </a>
    ),

    img: (props) => (
        <Image
            sizes="(max-width: 768px) 100vw, 800px"
            className="my-6 rounded-lg border border-border"
            style={{ width: "100%", height: "auto" }}
            {...(props as ImageProps)}
        />
    ),

    Callout,
    PhaseHeading,
    CommandLine,
};

export function useMDXComponents(): MDXComponents {
    return components;
}
